from typing import Union

class HashTable:
    def __init__(self, size: int):
        self.__table = {}
        self.size = size

    def __hash(self, value: str) -> int:
        return sum(map(lambda x: ord(x), list(value))) % self.size

    def put(self, value: str) -> None:
        hash = self.__hash(value)

        # for quadratic probing
        attempts = 1

        while hash in self.__table:
            # lienar probing
            #hash += 1
            # quadratic probing
            hash += attempts ** 2
            attempts += 1

        self.__table[hash] = value
        return hash

    def delete(self, key):
        if key in self.__table: del self.__table[key]

    def find(self, key: int) -> Union[None, str]:
        return self.__table[key] if key in self.__table else None 


    def each(self, func) -> None:
        for key, value in self.__table.items():
            func(key, value)
    
hashTable = HashTable(10)

hashTable.put('Mia')
hashTable.put('Sam')
hashTable.put('Tim')
hashTable.put('Lou')
hashTable.put('Zoe')
hashTable.put('Bea')
hashTable.put('Leo')
hashTable.put('Jan')
hashTable.put('Ted')
hashTable.put('Max')
key = hashTable.put('Ada')

hashTable.each(lambda key, val: print(f'[{key}] --> {val}'))
print(hashTable.find(5))
hashTable.delete(key)
hashTable.each(lambda key, val: print(f'[{key}] --> {val}'))
