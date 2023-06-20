import { localStorageService } from "@/shared";

export const state = {
  tasks: localStorageService.get('TASK'),
  taskTitle: '',
  taskDescription: '',
  editTaskId: null,
}