class Queue {
  constructor(sizeMax) {
    this.max = sizeMax;      // ค่าขนาดของ list ที่ใหญ่ที่สุด 
    this.head = 0;           // ส่วนหัว
    this.tail = 0;           // ส่วนหาง
    this.size = 0;           // ขนาดของ Queue 
    this.data = new Array(sizeMax);
  }
// output: list ว่างจะ return true, ถ้ามีข้อมูลจะ return false
// empty จะต้องมีค่า size เป็น 0 return ค่าเป็น true , ถ้ามีค่า size มากกว่า 0 จะ return ค่าเป็น false
  empty() {
    return this.size == 0;
  }
// output: เมื่อเต็มจะ return true, ถ้าไม่เต็มจะ return false
  full() {
    return this.size == this.data.length;
  }
// input: x : ข้อมูลใด ๆ
// output:  ถ้า list เต็มจะ return false [เพิ่มไม่ได้], ถ้า list ว่าง จะเพิ่มได้ return true
  enqueue(x) {                      // เพิ่มค่าเข้าไป 
    if(this.size == this.max) {     // ขนาด size เท่ากับ max
      return false;                 // เพิ่มไม่ได้ คืนค่า false
    }
    this.data[this.tail] = x;       // จุดหาง = ค่าที่เพิ่มเข้ามา
    this.size++;                    // size ขยายขึ้น
    this.tail++;                    // จุดหาง ขเยิบตำแหน่งไปอีก

    if(this.tail == this.max){      // จุดหาง = max
      this.tail = 0;
    }
    return true;
  }
// output:  ถ้า list มีข้อมูลจะ return ข้อมูล , ถ้า list ว่างจะ return null
  dequeue() {
    if(this.size == 0) {
      return null;
    }
    const x = this.data[this.head];

    this.size--;
    this.head++;

    if(this.head == this.max) {
      this.head = 0;
    }
    return x;
  }
}

module.exports = Queue;