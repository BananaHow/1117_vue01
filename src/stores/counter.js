import { defineStore } from "pinia";

export default defineStore("counter", {
    //  data(){}
    state() {
        return {
            location: 1,
            weatherInfo: {},
        }
    },
    //  computed
    getters: {
        locationInfo() {
            return `現在位置: ${this.location}`
        }
    },
    //  methods
    actions: {
        getLocation() {
            console.log(this.location)
        },
        setLocation(num) {
            this.location = num;
        },
        getWeather() {
            window.onload = () => {
                fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DCCC3299-0DA4-4054-BA67-B0B6B0942484")
                    .then(res => res.json())
                    .then(data => {
                        this.weatherInfo = data;
                        console.log(this.weatherInfo)
                    })
            }

        },
        testPra(pra) {
            if (pra !== "prd") {
                console.log("xxx")
            } else {
                console.log(pra)
            }
        }
    }
})