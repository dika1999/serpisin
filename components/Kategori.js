import Jasa from './Jasa'

//Gambar Kategori
import Kategori1 from '../assets/images/Kategori/elektronik.png'
import Kategori2 from '../assets/images/Kategori/otomotif.png'
import Kategori3 from '../assets/images/Kategori/pertukangan.png'
import Kategori4 from '../assets/images/Kategori/perawatandiri.png'
import Kategori5 from '../assets/images/Kategori/tik.png'

// Kategori
const kategoriData = [
    {
        id: 1,
        title: "Semua",
        jasa: Jasa,
    },
    {
        id: 2,
        title: "Elektronik",
        image: Kategori1,
        jasa: [...Jasa.slice(0, 2)],
    },
    {
        id: 3,
        title: "Otomotif",
        image: Kategori2,
        jasa: [...Jasa.slice(2, 5)],
    },
    {
        id: 4,
        title: "Pertukangan",
        image: Kategori3,
        jasa: [...Jasa.slice(5, 7)],
    },
    {
        id: 5,
        title: "Perawatan Diri",
        image: Kategori4,
        jasa: [...Jasa.slice(7, 8)],
    },
    {
        id: 6,
        title: "TIK",
        image: Kategori5,
        jasa: [...Jasa.slice(8, 9)],
    },
];

export default kategoriData;
