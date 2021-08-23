export class DB {
    constructor(name) {
        this.name = name
    }
    isNull() {
        return this._get()
    }
    _get() {
        const str = localStorage.getItem(this.name)
        if (str) {
            return JSON.parse(str)
        } else {
            return []
        }
    }
    _set(list) {
        const str = JSON.stringify(list)
        localStorage.setItem(this.name, str)
    }
    getList() {
        return this._get()
    }
    delete(id) {
        const list = this._get()
        const index = list.findIndex(id)
        list.splice(index, 1)
        this._set(list)
    }
    add(obj) {
        const list = this._get()
        obj.id = list[list.length].id + 1
        list.unshift(obj)
        this._set(list)
    }
    update(obj) {
        const list = this._get()
        const index = list.findIndex(obj.id)
        list[index] = { ...list[index], obj }
        this._set(list)
    }
    init(list) {
        this._set(list)
    }
}