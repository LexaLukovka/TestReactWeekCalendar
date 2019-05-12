class Storages {
  static get(name) {
    if (typeof window === 'undefined') return null

    return JSON.parse(localStorage.getItem(name))
  }

  static put(name, value) {
    if (typeof window === 'undefined') return

    localStorage.setItem(name, JSON.stringify(value))
  }

}

export default Storages()
