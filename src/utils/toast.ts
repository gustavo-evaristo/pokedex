import { toast as reactToast } from 'react-toastify';

interface Toast {
  message: string;
  type?: 'error' | 'success';
}

export function toast({ message, type = 'error' }: Toast) {
  return reactToast(message, { type, position: 'bottom-right', toastId: message });
}
