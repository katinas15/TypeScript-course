import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(sorter.collection)

const charactersCollection = new CharactersCollection("Xaayb")
const charSorter = new Sorter(charactersCollection)
charSorter.sort()
console.log(charSorter.collection)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(156)

const listSorter = new Sorter(linkedList)
listSorter.sort()
linkedList.print()
