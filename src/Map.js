import React from 'react'

const makanans = [
    {
        nama : 'Soto',
        harga : 12000
    },
    {
        nama : 'Bakso',
        harga : 10000
    },
    {
        nama : 'Mie Ayam',
        harga : 7000
    },
    {
        nama : 'Nasi Goreng',
        harga : 15000
    }
]

//reduce
const total_bayar = makanans.reduce((total_harga, makanan) => {
    return total_harga + makanan.harga;
}, 0);

export const Map = () => {
  return (
    <div>
        <h2>Map Sederhana</h2>
        <ul>
            {makanans.map((makanan, index) => (
                <li>{index+1}. {makanan.nama} - Harga {makanan.harga}</li>
            ))}
        </ul>


        <h2>Map Filter harga yang lebih dari sama dengan 11.000</h2>
        <ul>
            {makanans.filter((makanan) => makanan.harga > 11000).map((makanan, index) => (
                <li>{index+1}. {makanan.nama} - Harga {makanan.harga}</li>
            ))}
        </ul>

        <h5>Total Bayar : {total_bayar}</h5>
    </div>
  )
}

export default Map
