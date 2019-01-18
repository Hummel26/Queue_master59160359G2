// 0. import Queue มาใช้ ใน test

const Queue = require("./Queue");

// 1. สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)

test("สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)", () => {
    const q = new Queue();
    expect(q.empty()).toBe(true)
})

// 2. สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20

test("สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20", () => {
    const q = new Queue(1);
    q.enqueue(20);
    expect(q.dequeue()).toBe(20)
})

// 3. สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)

test("สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)", () => {
    const q = new Queue(1);
    q.enqueue(1);
    expect(q.full()).toBe(true)
})

// 4. สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)

test("สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)", () => {
    const q = new Queue(1);
    q.enqueue(1);
    expect(q.enqueue(5)).toBe(false)
})

// 5. สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน

test("สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน", () => {
    const q = new Queue(2);

    q.enqueue(1);
    q.enqueue(2);

    expect(q.dequeue()).toBe(1)
    expect(q.dequeue()).toBe(2)
})

// 6. สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null

test("สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null", () => {
    const q = new Queue(1);

    q.dequeue();
    expect(q.dequeue()).toBe(null)
})

// 7. Bug

// สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไปตามลำดับ และทำการ dequeue แล้วตรวจว่าค่าที่ได้จาก enqueue 3 เป็น true (เพิ่มได้) 
test("Bug", () => {
    const q = new Queue(2)

    q.enqueue(1);
    q.enqueue(2);
    q.dequeue();

    expect(q.enqueue(3)).toBe(true)

})









module.exports = Queue;