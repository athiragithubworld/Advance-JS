// --------------------------------------Task 12-----
class Student{
    static count=0;  //static variable to call
    constructor(name,age,PhNo,Marks){
        this.name = `${name}`
        this.age = `${age}`
        this.PhNo = `${PhNo}`
        this.Marks = `${Marks}`
    }
    static countStudent(){
        return(Student.count++);     //this is how u access static variable
    }
    //4.Write a function to check whether the student is egligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
    
    studentElgible(Marks){
        if (`${this.Marks}` > 40){
            console.log(`${this.name} is Eligible`);
        }
        else{
            console.log(`${this.name} is Not Eligible`);
        }
        }
    }
    const std = new Student("athi",21,123,52);
    console.log(std);
    std.studentElgible();
    //5.Create 5 students with different names and age
    const std1 = new Student("athi77",21,123,50);
    const std2 = new Student("abc",21,123,10);
    const std3 = new Student("athi123",21,123,59);
    const std4 = new Student("athi456",21,123,30);
    const std5 = new Student("athi222",21,123,102);
    console.log(std1);
    console.log(std2);
    console.log(std3);
    console.log(std4);
    console.log(std5);
    console.log(Student.countStudent());
    std1.studentElgible();
    std2.studentElgible();
    std3.studentElgible();
    std4.studentElgible();
    std5.studentElgible();