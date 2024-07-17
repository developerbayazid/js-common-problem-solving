class Parent {
    firstAsset(){
        console.log('First Asset');
    }
    secondAsset(){
        console.log('Second Asset');
    }
}

class Child extends Parent {
    demo(){
        super.firstAsset();
        super.secondAsset();
    }

}

let obj = new Child();

obj.demo();