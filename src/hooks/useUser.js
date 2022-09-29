function useUser() {
  return JSON.parse(localStorage.getItem("syntec-user"));
}

export default useUser || null;
