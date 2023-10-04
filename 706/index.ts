// failed

interface hd {
    key: number;
    value: number;
}

class MyHashMap {
    data: hd[];

    constructor() {
        this.data = [];
    }

    put(key: number, value: number): void {
        let i = this.data.findIndex((item) => item.key === key);
        if (i !== -1) this.data[i] = { key, value };
        else this.data.push({ key, value });
    }

    get(key: number): number {
        // return value or -1
        return this.data.find((item) => item.key == key)?.value ?? -1;
    }

    remove(key: number): void {
        this.data = this.data.splice(
            this.data.findIndex((item) => item.key === key) - 1,
            1
        );
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
console.log(myHashMap);
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
console.log(myHashMap);
myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]
