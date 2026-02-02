'use client';

import user1 from '@/assets/images/users/user-1.jpg';
import user2 from '@/assets/images/users/user-2.jpg';
import user3 from '@/assets/images/users/user-3.jpg';
import { yupResolver } from '@hookform/resolvers/yup';
import { createContext, startTransition, use, useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const defaultUsers = [user1, user2, user3];
const KanbanContext = createContext(undefined);
export const kanbanTaskSchema = yup.object({
  title: yup.string().required('Please enter project title'),
  date: yup.string().required('Please enter project Date'),
  category: yup.mixed().required('Please Select a category')
});
export const kanbanSectionSchema = yup.object({
  sectionTitle: yup.string().required('Section title is required')
});
const useKanbanContext = () => {
  const context = use(KanbanContext);
  if (!context) {
    throw new Error('useKanbanContext can only be used within KanbanProvider');
  }
  return context;
};
const KanbanProvider = ({
  children,
  tasksData,
  sectionsData
}) => {
  const [sections, setSections] = useState(sectionsData);
  const [tasks, setTasks] = useState(tasksData);
  const [activeSectionId, setActiveSectionId] = useState();
  const [activeTaskId, setActiveTaskId] = useState();
  const [taskFormData, setTaskFormData] = useState();
  const [sectionFormData, setSectionFormData] = useState();
  const [dialogStates, setDialogStates] = useState({
    showNewTaskModal: false,
    showSectionModal: false
  });
  const {
    control: newTaskControl,
    handleSubmit: newTaskHandleSubmit,
    reset: newTaskReset
  } = useForm({
    resolver: yupResolver(kanbanTaskSchema)
  });
  const {
    control: sectionControl,
    handleSubmit: sectionHandleSubmit,
    reset: sectionReset
  } = useForm({
    resolver: yupResolver(kanbanSectionSchema)
  });
  const emptySectionForm = useCallback(() => {
    sectionReset({
      sectionTitle: ''
    });
  }, []);
  const emptyTaskForm = useCallback(() => {
    newTaskReset({
      title: undefined,
      category: undefined,
      date: undefined
    });
  }, []);
  const toggleNewTaskModal = (sectionId, taskId) => {
    if (sectionId) setActiveSectionId(sectionId);
    if (taskId) {
      const foundTask = tasks.find(task => task.id === taskId);
      if (foundTask) {
        newTaskReset({
          title: foundTask.title,
          category: foundTask.category,
          date: foundTask.date
        });
        startTransition(() => {
          setActiveTaskId(taskId);
        });
        startTransition(() => {
          setTaskFormData(foundTask);
        });
      }
    }
    if (dialogStates.showNewTaskModal) emptyTaskForm();
    startTransition(() => {
      setDialogStates({
        ...dialogStates,
        showNewTaskModal: !dialogStates.showNewTaskModal
      });
    });
  };
  const toggleSectionModal = sectionId => {
    if (sectionId) {
      const foundSection = sections.find(section => section.id === sectionId);
      if (foundSection) {
        startTransition(() => {
          setSectionFormData(foundSection);
        });
        startTransition(() => {
          setActiveSectionId(foundSection.id);
        });
        sectionReset({
          sectionTitle: foundSection.title
        });
      }
    }
    if (dialogStates.showSectionModal) emptySectionForm();
    startTransition(() => {
      setDialogStates({
        ...dialogStates,
        showSectionModal: !dialogStates.showSectionModal
      });
    });
  };
  const getAllTasksPerSection = useCallback(id => {
    return tasks.filter(task => task.sectionId == id);
  }, [tasks]);
  const handleNewTask = newTaskHandleSubmit(values => {
    const formData = {
      title: values.title,
      category: values.category,
      date: values.date
    };
    if (activeSectionId) {
      const newTask = {
        ...formData,
        title: formData.title,
        category: formData.category,
        date: formData.date,
        image: taskFormData?.image,
        users: taskFormData?.users || defaultUsers,
        status: taskFormData?.status || 'todo',
        sectionId: activeSectionId,
        id: Number(tasks.slice(-1)[0].id) + 1 + ''
      };
      setTasks([...tasks, newTask]);
    }
    startTransition(() => {
      toggleNewTaskModal();
    });
    setActiveSectionId(undefined);
    newTaskReset();
  });
  const handleEditTask = newTaskHandleSubmit(values => {
    const formData = {
      title: values.title,
      category: values.category,
      date: values.date
    };
    if (activeSectionId && activeTaskId) {
      const newTask = {
        ...formData,
        title: formData.title,
        category: formData.category,
        date: formData.date,
        image: taskFormData?.image,
        sectionId: activeSectionId,
        users: taskFormData?.users || defaultUsers,
        status: taskFormData?.status || 'todo',
        id: activeTaskId
      };
      setTasks(tasks.map(t => t.id === activeTaskId ? newTask : t));
    }
    startTransition(() => {
      toggleNewTaskModal();
    });
    startTransition(() => {
      setActiveSectionId(undefined);
    });
    startTransition(() => {
      newTaskReset();
    });
    startTransition(() => {
      setTaskFormData(undefined);
    });
  });
  const handleDeleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  const onDragEnd = result => {
    const {
      destination,
      draggableId
    } = result;
    if (!destination) return;
    const taskIndex = tasks.findIndex(task => String(task.id) === String(draggableId));
    if (taskIndex === -1) return;
    const task = tasks[taskIndex];
    let newTasks = tasks.filter(t => String(t.id) !== String(draggableId));
    const updatedTask = {
      ...task,
      sectionId: destination.droppableId
    };
    let destIdx = 0;
    let count = 0;
    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].sectionId === destination.droppableId) {
        if (count === destination.index) {
          destIdx = i;
          break;
        }
        count++;
      }
      if (i === newTasks.length - 1) {
        destIdx = newTasks.length;
      }
    }
    newTasks = [...newTasks.slice(0, destIdx), updatedTask, ...newTasks.slice(destIdx)];
    setTasks(newTasks);
  };
  const handleNewSection = sectionHandleSubmit(values => {
    const section = {
      // TODO test, test when array is empty
      id: Number(sections.slice(-1)[0].id) + 1 + '',
      title: values.sectionTitle
    };
    setSections([...sections, section]);
    startTransition(() => {
      toggleSectionModal();
    });
    sectionReset();
  });
  const handleEditSection = sectionHandleSubmit(values => {
    if (activeSectionId) {
      const newSection = {
        id: activeSectionId,
        title: values.sectionTitle
      };
      setSections(sections.map(section => {
        return section.id === activeSectionId ? newSection : section;
      }));
    }
    startTransition(() => {
      toggleSectionModal();
    });
    sectionReset();
  });
  const handleDeleteSection = sectionId => {
    setSections(sections.filter(section => section.id !== sectionId));
  };
  return <KanbanContext.Provider value={useMemo(() => ({
    sections,
    activeSectionId,
    taskFormData,
    sectionFormData,
    newTaskModal: {
      open: dialogStates.showNewTaskModal,
      toggle: toggleNewTaskModal
    },
    sectionModal: {
      open: dialogStates.showSectionModal,
      toggle: toggleSectionModal
    },
    taskForm: {
      control: newTaskControl,
      newRecord: handleNewTask,
      editRecord: handleEditTask,
      deleteRecord: handleDeleteTask
    },
    sectionForm: {
      control: sectionControl,
      newRecord: handleNewSection,
      editRecord: handleEditSection,
      deleteRecord: handleDeleteSection
    },
    getAllTasksPerSection,
    onDragEnd
  }), [sections, tasks, activeSectionId, taskFormData, sectionFormData, dialogStates])}>
      {children}
    </KanbanContext.Provider>;
};
export { KanbanProvider, useKanbanContext };