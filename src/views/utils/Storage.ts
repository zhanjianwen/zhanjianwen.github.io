
import * as Store from 'store'
interface StorageGet {
    key: string
    value: string
}
const getStorage = (values: StorageGet) => {
    Store.get(values.key, values.value);
}
const removeStorage = (values: StorageGet) => {
    Store.remove(values.key);
}
const removeAllStorage = () => {
    Store.clearAll();
}
const StorageUtils: any = {
    get: getStorage,
    remove: removeStorage,
    removeAll: removeAllStorage
}
export default StorageUtils