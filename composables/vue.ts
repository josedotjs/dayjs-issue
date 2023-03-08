export const isHydrated = ref(false);

export const onHydrated = (cb: () => unknown) => {
  watchOnce(isHydrated, () => cb(), { immediate: isHydrated.value });
};
