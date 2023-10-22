import { ref } from 'vue';

export const useNotification = () => {
  const showNotification = ref(false);
  const message = ref('');
  const onClose = ref();

  const closeNotification = () => {
    message.value = '';
    showNotification.value = false;
  };

  const openNotification = (msg, cancelCallback) => {
    message.value = msg;
    onClose.value = cancelCallback;
    showNotification.value = true;

    setTimeout(() => {
      closeNotification();
    }, 2000);
  };

  return {
    showNotification,
    message,
    onClose,
    openNotification,
    closeNotification,
  };
};
