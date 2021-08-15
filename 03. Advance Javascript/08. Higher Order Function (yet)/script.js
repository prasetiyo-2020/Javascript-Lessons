// this pada ARROW FUNCTION
// Constructor Function
const Mahasiswa1 = function() {
    this.nama = 'Prasetiyo';
    this.umur = 30;
    this.sayHello = function() {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    };
}

const prasetiyo = new Mahasiswa1();

// Arrow Function dengan constructor
const Mahasiswa2 = function () {
    this.nama = 'Ramdani Setiawan';
    this.umur = 25;
    this.sayHello = () => {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    };
}

const ramdani = new Mahasiswa2();

// Object Literal
const mhs1 = {
    nama: 'Prasetiyo',
    umur: 33,
    sayHello: function () {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }
};

// ---

const Mahasiswa3 = function() {
    this.nama = 'Khoirun';
    this.umur = 30;
    this.sayHello = function() {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    };

    setInterval(() => {
        console.log(this.umur++);
    }, 500);
}

const khoirun = new Mahasiswa3();

// ---
