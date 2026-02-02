import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import type { KanbanDialogType, KanbanProviderProps, KanbanSectionType, KanbanTaskType, KanbanType } from '@/types/kanban'
import type { DropResult } from '@hello-pangea/dnd'
import { yupResolver } from '@hookform/resolvers/yup'
import { createContext, startTransition, use, useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const defaultUsers = [user1, user2, user3]
const KanbanContext = createContext<KanbanType | undefined>(undefined)

export const kanbanTaskSchema = yup.object({
  title: yup.string().required('Please enter project title'),
  date: yup.string().required('Please enter project Date'),
  category: yup.mixed<KanbanTaskType['category']>().required('Please Select a category'),
})

export type TaskFormFields = yup.InferType<typeof kanbanTaskSchema>

export const kanbanSectionSchema = yup.object({
  sectionTitle: yup.string().required('Section title is required'),
})

export type SectionFormFields = yup.InferType<typeof kanbanSectionSchema>

const useKanbanContext = () => {
  const context = use(KanbanContext)
  if (!context) {
    throw new Error('useKanbanContext can only be used within KanbanProvider')
  }
  return context
}

const KanbanProvider = ({ children, tasksData, sectionsData }: KanbanProviderProps) => {
  const [sections, setSections] = useState<KanbanSectionType[]>(sectionsData)
  const [tasks, setTasks] = useState<KanbanTaskType[]>(tasksData)
  const [activeSectionId, setActiveSectionId] = useState<KanbanSectionType['id']>()
  const [activeTaskId, setActiveTaskId] = useState<KanbanTaskType['id']>()
  const [taskFormData, setTaskFormData] = useState<KanbanTaskType>()
  const [sectionFormData, setSectionFormData] = useState<KanbanSectionType>()
  const [dialogStates, setDialogStates] = useState<KanbanDialogType>({
    showNewTaskModal: false,
    showSectionModal: false,
  })

  const {
    control: newTaskControl,
    handleSubmit: newTaskHandleSubmit,
    reset: newTaskReset,
  } = useForm({
    resolver: yupResolver(kanbanTaskSchema),
  })

  const {
    control: sectionControl,
    handleSubmit: sectionHandleSubmit,
    reset: sectionReset,
  } = useForm({
    resolver: yupResolver(kanbanSectionSchema),
  })

  const emptySectionForm = useCallback(() => {
    sectionReset({ sectionTitle: '' })
  }, [])

  const emptyTaskForm = useCallback(() => {
    newTaskReset({
      title: undefined,
      category: undefined,
      date: undefined,
    })
  }, [])

  const toggleNewTaskModal = (sectionId?: KanbanSectionType['id'], taskId?: KanbanTaskType['id']) => {
    if (sectionId) setActiveSectionId(sectionId)
    if (taskId) {
      const foundTask = tasks.find((task) => task.id === taskId)
      if (foundTask) {
        newTaskReset({
          title: foundTask.title,
          category: foundTask.category,
          date: foundTask.date,
        })
        startTransition(() => {
          setActiveTaskId(taskId)
        })
        startTransition(() => {
          setTaskFormData(foundTask)
        })
      }
    }
    if (dialogStates.showNewTaskModal) emptyTaskForm()
    startTransition(() => {
      setDialogStates({ ...dialogStates, showNewTaskModal: !dialogStates.showNewTaskModal })
    })
  }

  const toggleSectionModal = (sectionId?: KanbanSectionType['id']) => {
    if (sectionId) {
      const foundSection = sections.find((section) => section.id === sectionId)
      if (foundSection) {
        startTransition(() => {
          setSectionFormData(foundSection)
        })
        startTransition(() => {
          setActiveSectionId(foundSection.id)
        })
        sectionReset({
          sectionTitle: foundSection.title,
        })
      }
    }
    if (dialogStates.showSectionModal) emptySectionForm()
    startTransition(() => {
      setDialogStates({ ...dialogStates, showSectionModal: !dialogStates.showSectionModal })
    })
  }

  const getAllTasksPerSection = useCallback(
    (id: KanbanSectionType['id']) => {
      return tasks.filter((task) => task.sectionId == id)
    },
    [tasks],
  )

  const handleNewTask = newTaskHandleSubmit((values: TaskFormFields) => {
    const formData: TaskFormFields = {
      title: values.title,
      category: values.category,
      date: values.date,
    }

    if (activeSectionId) {
      const newTask: KanbanTaskType = {
        ...formData,
        title: formData.title,
        category: formData.category,
        date: formData.date,
        image: taskFormData?.image,
        users: taskFormData?.users || defaultUsers,
        status: taskFormData?.status || 'todo',
        sectionId: activeSectionId,
        id: Number(tasks.slice(-1)[0].id) + 1 + '',
      }
      setTasks([...tasks, newTask])
    }
    startTransition(() => {
      toggleNewTaskModal()
    })
    setActiveSectionId(undefined)
    newTaskReset()
  })

  const handleEditTask = newTaskHandleSubmit((values: TaskFormFields) => {
    const formData: TaskFormFields = {
      title: values.title,
      category: values.category,
      date: values.date,
    }

    if (activeSectionId && activeTaskId) {
      const newTask: KanbanTaskType = {
        ...formData,
        title: formData.title,
        category: formData.category,
        date: formData.date,
        image: taskFormData?.image,
        sectionId: activeSectionId,
        users: taskFormData?.users || defaultUsers,
        status: taskFormData?.status || 'todo',
        id: activeTaskId,
      }
      setTasks(tasks.map((t) => (t.id === activeTaskId ? newTask : t)))
    }
    startTransition(() => {
      toggleNewTaskModal()
    })
    startTransition(() => {
      setActiveSectionId(undefined)
    })
    startTransition(() => {
      newTaskReset()
    })
    startTransition(() => {
      setTaskFormData(undefined)
    })
  })

  const handleDeleteTask = (taskId: KanbanTaskType['id']) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, draggableId } = result
    if (!destination) return

    const taskIndex = tasks.findIndex((task) => String(task.id) === String(draggableId))
    if (taskIndex === -1) return

    const task = tasks[taskIndex]

    let newTasks = tasks.filter((t) => String(t.id) !== String(draggableId))

    const updatedTask = { ...task, sectionId: destination.droppableId }

    let destIdx = 0
    let count = 0
    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].sectionId === destination.droppableId) {
        if (count === destination.index) {
          destIdx = i
          break
        }
        count++
      }
      if (i === newTasks.length - 1) {
        destIdx = newTasks.length
      }
    }

    newTasks = [...newTasks.slice(0, destIdx), updatedTask, ...newTasks.slice(destIdx)]

    setTasks(newTasks)
  }

  const handleNewSection = sectionHandleSubmit((values: SectionFormFields) => {
    const section: KanbanSectionType = {
      // TODO test, test when array is empty
      id: Number(sections.slice(-1)[0].id) + 1 + '',
      title: values.sectionTitle,
    }
    setSections([...sections, section])
    startTransition(() => {
      toggleSectionModal()
    })
    sectionReset()
  })

  const handleEditSection = sectionHandleSubmit((values: SectionFormFields) => {
    if (activeSectionId) {
      const newSection = {
        id: activeSectionId,
        title: values.sectionTitle,
      }
      setSections(
        sections.map((section) => {
          return section.id === activeSectionId ? newSection : section
        }),
      )
    }
    startTransition(() => {
      toggleSectionModal()
    })
    sectionReset()
  })

  const handleDeleteSection = (sectionId: KanbanSectionType['id']) => {
    setSections(sections.filter((section) => section.id !== sectionId))
  }

  return (
    <KanbanContext.Provider
      value={useMemo(
        () => ({
          sections,
          activeSectionId,
          taskFormData,
          sectionFormData,
          newTaskModal: {
            open: dialogStates.showNewTaskModal,
            toggle: toggleNewTaskModal,
          },
          sectionModal: {
            open: dialogStates.showSectionModal,
            toggle: toggleSectionModal,
          },
          taskForm: {
            control: newTaskControl,
            newRecord: handleNewTask,
            editRecord: handleEditTask,
            deleteRecord: handleDeleteTask,
          },
          sectionForm: {
            control: sectionControl,
            newRecord: handleNewSection,
            editRecord: handleEditSection,
            deleteRecord: handleDeleteSection,
          },
          getAllTasksPerSection,
          onDragEnd,
        }),
        [sections, tasks, activeSectionId, taskFormData, sectionFormData, dialogStates],
      )}>
      {children}
    </KanbanContext.Provider>
  )
}

export { KanbanProvider, useKanbanContext }
