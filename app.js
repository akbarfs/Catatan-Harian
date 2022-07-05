new Vue({
    el: '#app',
    data: {
        katakunci: '',
        isi: '',
        catatan: ['UAS jam 14.00','Pengumpulan tugas jam 17.00']
    },
    methods:{
        tambah: function(){
            this.catatan.push(this.isi)
            this.isi = ''
        },
        edit(index){
            this.catatan.$set(index, val)
        },
        hapus(index){
            this.catatan.splice(index, 1)
        },
        reset(){
            this.catatan.splice(0)
        }
    },
    computed: {
        caricatatan: function () {
            return this.catatan.filter((ct) => {
                return ct.match(this.katakunci)
            });
        }
    }
})
