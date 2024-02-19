import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import alfaRomeoLogo from '../../assets/images/alfa-romeo-logo.webp';
import alpinaLogo from '../../assets/images/alpina-logo.webp';
import apriliaLogo from '../../assets/images/aprilia-logo.webp';
import bmwLogo from '../../assets/images/bmw-logo.webp';
import suzukiLogo from '../../assets/images/suzuki-logo.webp';
import volvoPentaLogo from '../../assets/images/volvo-penta-logo.webp';
import afmLogmanLogo from '../../assets/images/afm-logman-logo.webp';
import agcoLogo from '../../assets/images/agco-logo.webp';
import caterpillarLogo from '../../assets/images/caterpillar-logo.webp';
import mercedesLogo from '../../assets/images/mercedes-logo.webp';
import { BsChevronDoubleRight } from "react-icons/bs";
import './VehicleSeries.css'

const VehicleSeries = () => {

    const alfaRomeoSeries = {
        seriesDetails: [
            { name: '147', logo: require('../../assets/images/Alfa Romeo Car Series/147model.webp'), id: '147' },
            { name: '156', logo: require('../../assets/images/Alfa Romeo Car Series/156model.webp'), id: '156' },
        ], seriesName: 'Alfa Romeo', seriesImage: alfaRomeoLogo
    };

    const alpinaSeries = {
        seriesDetails: [
            { name: 'B3', logo: require('../../assets/images/Alpina Car Series/B3model.webp'), id: 'b3' },
            { name: 'B3 S', logo: require('../../assets/images/Alpina Car Series/B3smodel.webp'), id: 'b3s' },
        ], seriesName: 'Alpina', seriesImage: alpinaLogo
    };

    const apriliaSeries = {
        seriesDetails: [
            { name: 'Dorsoduro', logo: require('../../assets/images/Aprilia Bike Series/Dorsoduro.webp'), id: 'dorsoduro' },
            { name: 'RSV4', logo: require('../../assets/images/Aprilia Bike Series/RSV4.webp'), id: 'rsv4' },
        ], seriesName: 'Aprilia', seriesImage: apriliaLogo
    };

    const bmwSeries = {
        seriesDetails: [
            { name: 'C', logo: require('../../assets/images/BMW Bike Series/CModel.webp'), id: 'c' },
            { name: 'CE 04', logo: require('../../assets/images/BMW Bike Series/CE04model.webp'), id: 'ce04' },
        ], seriesName: 'BMW', seriesImage: bmwLogo
    };

    const suzukiSeries = {
        seriesDetails: [
            { name: 'DF115', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: 'DF115' },
            { name: 'DF140', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: 'DF140' },
        ], seriesName: 'Suzuki', seriesImage: suzukiLogo
    };

    const volvoPentaSeries = {
        seriesDetails: [
            { name: 'D3', logo: require('../../assets/images/Volvo Penta Boat Series/logo-tuning-x.png'), id: 'D3' },
            { name: 'D4', logo: require('../../assets/images/Volvo Penta Boat Series/logo-tuning-x.png'), id: 'D4' },
        ], seriesName: 'Volvo Penta', seriesImage: volvoPentaLogo
    };

    const afmLogmanSeries = {
        seriesDetails: [
            { name: '801 H4', logo: require('../../assets/images/Afm Logman Tractor Series/afm logman tractor.webp'), id: '801h4' },
            { name: '811 F', logo: require('../../assets/images/Afm Logman Tractor Series/afm logman tractor.webp'), id: '811f' },
        ], seriesName: 'AFM LOGMAN', seriesImage: afmLogmanLogo
    };

    const agcoSeries = {
        seriesDetails: [
            { name: 'DT205B', logo: require('../../assets/images/Agco Tractor Series/agco tractor.webp'), id: 'DT205B' },
            { name: 'DT225B', logo: require('../../assets/images/Agco Tractor Series/agco tractor.webp'), id: 'DT225B' },
        ], seriesName: 'AGCO', seriesImage: agcoLogo
    };

    const caterpillarSeries = {
        seriesDetails: [
            { name: '3126 B', logo: require('../../assets/images/Caterpillar Truck Series/Caterpillar Truck.webp'), id: '3126B' },
            { name: '3126 E', logo: require('../../assets/images/Caterpillar Truck Series/Caterpillar Truck.webp'), id: '3126E' },
        ], seriesName: 'Caterpillar', seriesImage: caterpillarLogo
    };

    const mercedesSeries = {
        seriesDetails: [
            { name: 'ACTROS', logo: require('../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'), id: 'ACTROS' },
            { name: 'AROCS', logo: require('../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'), id: 'AROCS' },
        ], seriesName: 'Mercedes', seriesImage: mercedesLogo
    };

    let { vehicleBrandId, vehicleSeriesId } = useParams();

    const [vehicleSeries, setVehicleSeries] = useState();

    // function replaceAll(str, find, replace) {
    //     return str.replace(new RegExp(find, 'g'), replace);
    // };

    useEffect(() => {

        // seriesId = replaceAll(seriesId, "-", ' ');

        if (vehicleBrandId === 'cars') {

            if (vehicleSeriesId == 'alfaRomeoSeries') {
                setVehicleSeries(alfaRomeoSeries);
            } else if (vehicleSeriesId == 'alpinaSeries') {
                setVehicleSeries(alpinaSeries);
            }

        } else if (vehicleBrandId === 'bikes') {
            if (vehicleSeriesId == 'apriliaSeries') {
                setVehicleSeries(apriliaSeries);
            } else if (vehicleSeriesId == 'bmwSeries') {
                setVehicleSeries(bmwSeries);
            }

        } else if (vehicleBrandId === 'boats') {
            if (vehicleSeriesId == 'suzuki') {
                setVehicleSeries(suzukiSeries);
            } else if (vehicleSeriesId == 'volvoPenta') {
                setVehicleSeries(volvoPentaSeries);
            }

        } else if (vehicleBrandId === 'tractors') {
            if (vehicleSeriesId == 'afmLogman') {
                setVehicleSeries(afmLogmanSeries);
            } else if (vehicleSeriesId == 'agco') {
                setVehicleSeries(agcoSeries);
            }

        } else if (vehicleBrandId === 'trucks') {
            if (vehicleSeriesId == 'caterpillar') {
                setVehicleSeries(caterpillarSeries);
            } else if (vehicleSeriesId == 'mercedes') {
                setVehicleSeries(mercedesSeries);
            }
        }

    }, [vehicleBrandId, vehicleSeriesId]);

    const navigate = useNavigate();

    const goBackToBrandSelection = () => {
        navigate(`/${vehicleBrandId}`);
    };

    const goToVehicleModels = (modelId) => {
        navigate(`/${vehicleBrandId}/${vehicleSeriesId}/${modelId}`);
    }

    return (
        <div>
            <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
                <Link to={`/${vehicleBrandId}`} className='font-bold text-base sm:text-xl'>{`${vehicleBrandId.charAt(0).toUpperCase()}${vehicleBrandId.substring(1,)}`}</Link>
                <BsChevronDoubleRight />
                <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
                    <img src={vehicleSeries?.seriesImage} className='w-8 h-8' />
                    <p>{vehicleSeries?.seriesName}</p>
                </a>
            </div>
            <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
                Select the Series for {vehicleSeries?.seriesName}
            </h1>
            <div className='flex flex-wrap justify-center gap-8'>
                {vehicleSeries?.seriesDetails?.map((brand, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip vehicleSeriesCards'
                        style={{ minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                        onClick={() => {
                            goToVehicleModels(brand.id);
                        }}
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
                <button
                    className='btnn btnBrandd'
                    style={{ borderRadius: '8px' }}
                    onClick={goBackToBrandSelection}
                >
                    Go Back To Brand Selection
                </button>
            </div>
        </div>
    )
}

export default VehicleSeries