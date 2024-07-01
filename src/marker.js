const markers = [
    {
        geocode: [26.196559, 91.687273],
        text: "main gate",
        info: 1
    },
    {
        geocode: [26.1957, 91.688742],
        text: "roundabout",
        info: 2
    },
    {
        geocode: [26.194, 91.69015],
        text: "way to view point 1",
        info: 39
    },
    {
        geocode: [26.1921, 91.6915],
        text: "roundabout",
        info: 38
    },
    {
        geocode: [26.18887, 91.6908],
        text: "trimuha",
        info: 49
    },
    {
        geocode: [26.1885, 91.6899],
        text: "",
        info: 50
    },
    {
        geocode: [26.1866, 91.6899],
        text: "roundabout near core 5",
        info: 52
    },
    {
        geocode: [26.1867, 91.69153],
        text: "core 2 canteen",
        info: 53
    },
    {
        geocode: [26.1859, 91.69153],
        text: "core 3 canteen",
        info: 54
    },
    {
        geocode: [26.1863, 91.689481],
        text: "core 5",
        info: 51
    },
    {
        geocode: [26.1845, 91.689967],
        text: "",
        info: 62
    },
    {
        geocode: [26.1844, 91.6905],
        text: "",
        info: 61
    },
    {
        geocode: [26.18429, 91.69112],
        text: "",
        info: 60
    },
    // {
    //     geocode: [26.18429, 91.69162],
    //     text: "",
    //     info: 59
    // },
    {
        geocode: [26.18438, 91.69229],
        text: "",
        info: 58
    },
    {
        geocode: [26.18461, 91.6929],
        text: "",
        info: 57
    },
    {
        geocode: [26.1887, 91.69167],
        text: "core 1",
        info: 47
    },
    {
        geocode: [26.1887, 91.6928],
        text: "",
        info: 48
    },
    {
        geocode: [26.1864, 91.6929],
        text: "",
        info: 55
    },
    {
        geocode: [26.1855, 91.6927],
        text: "",
        info: 56
    },
    {
        geocode: [26.1843, 91.6958],
        text: "kv roundabout",
        info: 64
    },
    {
        geocode: [26.1884, 91.69581],
        text: "near dibang",
        info: 28
    },
    {
        geocode: [26.1894, 91.69572],
        text: "siang backside",
        info: 29
    },
    {
        geocode: [26.18991, 91.6958],
        text: "",
        info: 30
    },
    {
        geocode: [26.18994, 91.698],
        text: "lohit hostel",
        info: 31
    },
    {
        geocode: [26.1883, 91.6978],
        text: "",
        info: 27
    },
    {
        geocode: [26.188, 91.6988],
        text: "",
        info: 25
    },
    {
        geocode: [26.1878, 91.70],
        text: "",
        info: 23
    },
    {
        geocode: [26.1878, 91.70069],
        text: "",
        info: 21
    },
    {
        geocode: [26.1872, 91.7007],
        text: "khokha gate",
        info: 22
    },
    {
        geocode: [26.1911, 91.7001],
        text: "",
        info: 16
    },
    {
        geocode: [26.1894, 91.7004],
        text: "",
        info: 18
    },
    {
        geocode: [26.189, 91.70055],
        text: "",
        info: 19
    },
    {
        geocode: [26.1892, 91.7015],
        text: "barak and umiam hostel",
        info: 20
    },
    {
        geocode: [26.1915, 91.7015],
        text: "kameng",
        info: 17
    },
    {
        geocode: [26.1895, 91.6941],
        text: "",
        info: 43
    },
    {
        geocode: [26.19176, 91.6959],
        text: "",
        info: 32
    },
    {
        geocode: [26.1917, 91.6983],
        text: "",
        info: 15
    },
    {
        geocode: [26.1929, 91.6959],
        text: "",
        info: 33
    },
    {
        geocode: [26.1919, 91.6944],
        text: "",
        info: 35
    },
    {
        geocode: [26.193, 91.6944],
        text: "subanshiri hostel",
        info: 36
    },
    {
        geocode: [26.1963, 91.6984],
        text: "",
        info: 9
    },
    {
        geocode: [26.196, 91.69896],
        text: "",
        info: 10
    },
    {
        geocode: [26.1953, 91.6991],
        text: "",
        info: 11
    },
    {
        geocode: [26.1942, 91.699],
        text: "dhanshiri hostel",
        info: 12
    },
    {
        geocode: [26.1931, 91.69883],
        text: "",
        info: 13
    },
    {
        geocode: [26.1924, 91.6986],
        text: "",
        info: 14
    },
    {
        geocode: [26.1963, 91.6971],
        text: "",
        info: 8
    },
    {
        geocode: [26.19628, 91.69627],
        text: "",
        info: 7
    },
    {
        geocode: [26.1954, 91.6946],
        text: "",
        info: 37
    },
    {
        geocode: [26.1963, 91.6945],
        text: "",
        info: 5
    },
    {
        geocode: [26.1968, 91.69528],
        text: "",
        info: 6
    },
    {
        geocode: [26.1975, 91.6917],
        text: "",
        info: 3
    },
    {
        geocode: [26.1977, 91.6931],
        text: "",
        info: 4
    },
    {
        geocode: [26.19082, 91.6934],
        text: "",
        info: 40
    },
    {
        geocode: [26.1901, 91.6934],
        text: "",
        info: 42
    },
    {
        geocode: [26.19015, 91.6931],
        text: "",
        info: 44
    },
    {
        geocode: [26.1897, 91.6921],
        text: "",
        info: 46
    },
    {
        geocode: [26.19028, 91.69229],
        text: "",
        info: 45
    },
    {
        geocode: [26.1909, 91.6925],
        text: "",
        info: 41
    },
];

export default markers