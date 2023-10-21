import { ref } from 'vue';

export const useConfirmModal = () => {
  const showModal = ref(false);
  const message = ref('');
  const onConfirm = ref();
  const onCancel = ref();

  const openModal = (msg, confirmCallback, cancelCallback) => {
    message.value = msg;
    onConfirm.value = confirmCallback;
    onCancel.value = cancelCallback;
    showModal.value = true;
  };

  const closeModal = () => {
    message.value = '';
    showModal.value = false;
  };

  return {
    showModal,
    message,
    onConfirm,
    onCancel,
    openModal,
    closeModal,
  };
};
