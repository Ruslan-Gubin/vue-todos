const get = (name) => {
	const dataStorage = window.localStorage.getItem(name)
  
	if (!dataStorage) {
    return []
	} 
  
	return JSON.parse(dataStorage)
}

const set = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data))
}


export const localStorageService = {
  get,
  set,
}