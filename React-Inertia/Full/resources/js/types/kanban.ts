import { type ChildrenType } from '@/types/index'
import { type DropResult } from '@hello-pangea/dnd'
import { type BaseSyntheticEvent } from 'react'
import { type Control } from 'react-hook-form'

export type KanbanProviderProps = {
  sectionsData: KanbanSectionType[]
  tasksData: KanbanTaskType[]
} & ChildrenType

export type KanbanDialogType = {
  showNewTaskModal: boolean
  showSectionModal: boolean
}

export type KanbanTaskType = {
  id: string
  sectionId: KanbanSectionType['id']
  category: {
    name: string
    variant: string
  }
  title: string
  users: string[]
  date: string
  image?: string
  status: 'todo' | 'in-progress' | 'done' | 'in-review'
  progress?: number
}

export type KanbanSectionType = {
  id: string
  title: string
}

export type FormControlSubmitType = {
  control: Control<any>
  newRecord: (values: BaseSyntheticEvent) => void
  editRecord: (values: BaseSyntheticEvent) => void
  deleteRecord: (id: string) => void
}

export type KanbanType = {
  sections: KanbanSectionType[]
  activeSectionId: KanbanSectionType['id'] | undefined
  newTaskModal: {
    open: boolean
    toggle: (sectionId?: KanbanSectionType['id'], taskId?: KanbanTaskType['id']) => void
  }
  sectionModal: {
    open: boolean
    toggle: (sectionId?: KanbanSectionType['id']) => void
  }
  taskFormData: KanbanTaskType | undefined
  sectionFormData: KanbanSectionType | undefined
  taskForm: FormControlSubmitType
  sectionForm: FormControlSubmitType
  getAllTasksPerSection: (sectionId: KanbanSectionType['id']) => KanbanTaskType[]
  onDragEnd: (result: DropResult) => void
}
