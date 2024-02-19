import React, { useState, useEffect } from 'react';
import './VehicleBrands.css';
import { useNavigate, useParams } from 'react-router-dom';

const VehicleBrands = () => {
    const carBrands = [
        { name: 'Alfa Romeo', logo: require('../../assets/images/alfa-romeo-logo.webp'), id: 'alfaRomeoSeries' },
        { name: 'Alpina', logo: require('../../assets/images/alpina-logo.webp'), id: 'alpinaSeries' },
    ];

    const bikeBrands = [
        { name: 'Aprilia', logo: require('../../assets/images/aprilia-logo.webp'), id: 'apriliaSeries' },
        { name: 'BMW', logo: require('../../assets/images/bmw-logo.webp'), id: 'bmwSeries' },
    ];

    const boatBrands = [
        { name: 'Suzuki', logo: require('../../assets/images/suzuki-logo.webp'), id: 'suzuki' },
        { name: 'Volvo Penta', logo: require('../../assets/images/volvo-penta-logo.webp'), id: 'volvoPenta' },
    ];

    const tactorBrands = [
        { name: 'AFM-LOGMAN', logo: require('../../assets/images/afm-logman-logo.webp'), id: 'afmLogman' },
        { name: 'AGCO', logo: require('../../assets/images/agco-logo.webp'), id: 'agco' },
    ];

    const truckBrands = [
        { name: 'Caterpillar', logo: require('../../assets/images/caterpillar-logo.webp'), id: 'caterpillar' },
        { name: 'Mercedes', logo: require('../../assets/images/mercedes-logo.webp'), id: 'mercedes' },
    ];

    let { vehicleBrandId } = useParams();

    const [vehicleBrands, setVehicleBrands] = useState();

    // function replaceAll(str, find, replace) {
    //     return str.replace(new RegExp(find, 'g'), replace);
    // };

    useEffect(() => {

        // seriesId = replaceAll(seriesId, "-", ' ');

        if (vehicleBrandId === 'cars') {
            setVehicleBrands(carBrands);
        } else if (vehicleBrandId === 'bikes') {
            setVehicleBrands(bikeBrands);
        } else if (vehicleBrandId === 'boats') {
            setVehicleBrands(boatBrands);
        } else if (vehicleBrandId === 'tractors') {
            setVehicleBrands(tactorBrands);
        } else if (vehicleBrandId === 'trucks') {
            setVehicleBrands(truckBrands);
        }

    }, [vehicleBrandId]);

    const navigate = useNavigate();

    const goBackToVehicleTypeSelection = () => {
        navigate('/');
    };

    // function replaceAll(str, find, replace) {
    //     return str.replace(new RegExp(find, 'g'), replace);
    // };

    const goToVehicleSeries = (brandId) => {
        // brandId = replaceAll(brandId, ' ', "-");
        navigate(`/${vehicleBrandId}/${brandId}`);
    };

    return (
        <div>
            <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
                Select the Manufacturer
            </h1>
            <div className='flex flex-wrap justify-center gap-8'>
                {vehicleBrands?.map((brand, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip vehicleBrandCards'
                        style={{ minHeight: '200px', padding: '12px', display: 'flex', alignItems: 'center' }}
                        onClick={() => goToVehicleSeries(brand.id)}
                    >
                        <img
                            src={brand.logo}
                            alt={`${brand.name} Logo`}
                            className='object-cover object-center transition-transform'
                            style={{ width: '100px' }}
                        />
                        <div className='p-2 text-center'>
                            <p className='text-lg font-semibold'>{brand.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-12 mb-6 flex items-center justify-end p-6 backButtonBrand'>
                <button className='btnn btnBrandd' style={{ borderRadius: '8px' }} onClick={goBackToVehicleTypeSelection}>Go Back To Vehicle Type Selection</button>
            </div>
        </div>
    );
};

export default VehicleBrands;