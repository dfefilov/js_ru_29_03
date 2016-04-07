import { EventEmitter } from 'events'
import DataWrapper from './DataWrapper'

class SimpleStore extends EventEmitter {
    constructor(stores, initialData) {
        super();

        this.__lastId = 0;
        this.__stores = stores;
        this.__items = {};

        if (initialData) initialData.forEach(this.__add);
    }

    emitChange() {
        this.emit('CHANGE_EVENT')
    }

    addChangeListener(callback) {
        this.on('CHANGE_EVENT', callback)
    }

    removeChangeListener(callback) {
        this.removeListener('CHANGE_EVENT', callback)
    }

    generateId() {
        return ++this.__lastId;
    }

    getStores() {
        return this.__stores
    }

    getStore(name) {
        return this.__stores[name]
    }

    getById = (id) => {
        return this.__items[id]
    }

    getAll = () => {
        return Object.keys(this.__items).map(this.getById)
    }

    __add = (item) => {
        if (item.id > this.__lastId) {
            this.__lastId = item.id;
        }

        this.__items[item.id] = new DataWrapper(item, this)
    }

    __delete = (id) => {
        delete this.__items[id]
    }
}

export default SimpleStore