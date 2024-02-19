import React, { useEffect, useState } from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";

import alfaRomeoLogo from '../../assets/images/alfa-romeo-logo.webp';
import alfaRomeoModel147 from '../../assets/images/Alfa Romeo Car Series/147model.webp'
import alfaRomeoModel156 from '../../assets/images/Alfa Romeo Car Series/156model.webp'

import alpinaLogo from '../../assets/images/alpina-logo.webp';
import alpinaB3 from '../../assets/images/Alpina Car Series/B3model.webp'
import alpinaB3s from '../../assets/images/Alpina Car Series/B3smodel.webp'

import apriliaLogo from '../../assets/images/aprilia-logo.webp';
import apriliaModelDorsoduro from '../../assets/images/Aprilia Bike Series/DorsoduroModel.webp';
import apriliaModelRSV4 from '../../assets/images/Aprilia Bike Series/RSV4.webp';

import bmwLogo from '../../assets/images/bmw-logo.webp';
import bmwModelC from '../../assets/images/BMW Bike Series/CModel.webp';
import bmwModelCE04 from '../../assets/images/BMW Bike Series/CE04model.webp';

import suzukiLogo from '../../assets/images/suzuki-logo.webp';
import suzukiDF115 from '../../assets/images/Suzuki Boat Series/logo-tuning-x.png'
import suzukiDF140 from '../../assets/images/Suzuki Boat Series/logo-tuning-x.png'

import volvoPentaLogo from '../../assets/images/volvo-penta-logo.webp';
import volvoPentaD3 from '../../assets/images/Volvo Penta Boat Series/logo-tuning-x.png'
import volvoPentaD4 from '../../assets/images/Volvo Penta Boat Series/logo-tuning-x.png'

import afmLogmanLogo from '../../assets/images/afm-logman-logo.webp';
import afmLogman801h4 from '../../assets/images/Afm Logman Tractor Series/afm logman tractor.webp'
import afmLogman811f from '../../assets/images/Afm Logman Tractor Series/afm logman tractor.webp'

import agcoLogo from '../../assets/images/agco-logo.webp';
import agcoDT205B from '../../assets/images/Agco Tractor Series/agco tractor.webp'
import agcoDT225B from '../../assets/images/Agco Tractor Series/agco tractor.webp'

import caterpillarLogo from '../../assets/images/caterpillar-logo.webp';
import caterpillarModel3126B from '../../assets/images/Caterpillar Truck Series/Caterpillar Truck.webp'
import caterpillarModel3126E from '../../assets/images/Caterpillar Truck Series/Caterpillar Truck.webp'

import mercedesLogo from '../../assets/images/mercedes-logo.webp';
import mercedesModelsACTROS from '../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'
import mercedesModelsARCOS from '../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'


const VehicleModels = () => {
    const alfaRomeoModels_147 = {
        modelDetails: [
            { name: '2001 2005', logo: require('../../assets/images/Alfa Romeo Car Series/147model.webp'), id: '20012005' },
            { name: '2005 ...', logo: require('../../assets/images/Alfa Romeo Car Series/147model.webp'), id: '2005onwards' },
        ],
        seriesName: 'Alfa Romeo',
        seriesImage: alfaRomeoLogo,
        modelImage: alfaRomeoModel147,
    };

    const alfaRomeoModels_156 = {
        modelDetails: [
            { name: '1997 2003', logo: require('../../assets/images/Alfa Romeo Car Series/156model.webp'), id: '19972003' },
            { name: '2002 2005', logo: require('../../assets/images/Alfa Romeo Car Series/156model.webp'), id: '20022005' },
        ],
        seriesName: 'Alfa Romeo',
        seriesImage: alfaRomeoLogo,
        modelImage: alfaRomeoModel156,
    };

    const alpinaModels_b3 = {
        modelDetails: [
            { name: '... 2018', logo: require('../../assets/images/Alpina Car Series/B3model.webp'), id: 'backwards2018' },
            { name: '2019 ...', logo: require('../../assets/images/Alpina Car Series/B3model.webp'), id: '2019onwards' },
        ],
        seriesName: 'Alpina',
        seriesImage: alpinaLogo,
        modelImage: alpinaB3,
    };

    const alpinaModels_b3s = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Alpina Car Series/B3smodel.webp'), id: 'all' },
        ],
        seriesName: 'Alpina',
        seriesImage: alpinaLogo,
        modelImage: alpinaB3s,
    };

    const apriliaModels_Dorsoduro = {
        modelDetails: [
            { name: '2010 2017', logo: require('../../assets/images/Aprilia Bike Series/DorsoduroModel.webp'), id: '20102017' },
            { name: '2010 ...', logo: require('../../assets/images/Aprilia Bike Series/DorsoduroModel.webp'), id: '2010onwards' },
        ],
        seriesName: 'Dorsoduro',
        seriesImage: apriliaLogo,
        modelImage: apriliaModelDorsoduro,
    };

    const apriliaModels_RSV4 = {
        modelDetails: [
            { name: '2010 2015', logo: require('../../assets/images/Aprilia Bike Series/RSV4.webp'), id: '20102015' },
            { name: '2015 ...', logo: require('../../assets/images/Aprilia Bike Series/RSV4.webp'), id: '2015onwards' },
        ],
        seriesName: 'RSV4',
        seriesImage: apriliaLogo,
        modelImage: apriliaModelRSV4,
    };

    const bmwModels_C = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/BMW Bike Series/CModel.webp'), id: 'all' },
        ],
        seriesName: 'BMW',
        seriesImage: bmwLogo,
        modelImage: bmwModelC,
    };

    const bmwModels_CE04 = {
        modelDetails: [
            { name: '2021 ...', logo: require('../../assets/images/BMW Bike Series/CE04model.webp'), id: '2021onwards' },
        ],
        seriesName: 'BMW',
        seriesImage: bmwLogo,
        modelImage: bmwModelCE04,
    };

    const suzukiModels_DF115 = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: 'all' },
        ],
        seriesName: 'Suzuki',
        seriesImage: suzukiLogo,
        modelImage: suzukiDF115,
    };

    const suzukiModels_DF140 = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: 'all' },
        ],
        seriesName: 'Suzuki',
        seriesImage: suzukiLogo,
        modelImage: suzukiDF140,
    };

    const volvoPentaModels_D3 = {
        modelDetails: [
            { name: '2009 ...', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: '2009onwards' },
        ],
        seriesName: 'Volvo Penta',
        seriesImage: volvoPentaLogo,
        modelImage: volvoPentaD3,
    };

    const volvoPentaModels_D4 = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: 'all' },
        ],
        seriesName: 'Volvo Penta',
        seriesImage: volvoPentaLogo,
        modelImage: volvoPentaD4,
    };

    const afmLogmanModels_801h4 = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Afm Logman Tractor Series/afm logman tractor.webp'), id: 'all' },
        ],
        seriesName: 'AFM LOGMAN',
        seriesImage: afmLogmanLogo,
        modelImage: afmLogman801h4,
    };

    const afmLogmanModels_811F = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Afm Logman Tractor Series/afm logman tractor.webp'), id: 'all' },
        ],
        seriesName: 'Alfa Romeo',
        seriesImage: afmLogmanLogo,
        modelImage: afmLogman811f,
    };

    const agcoModels_DT205B = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Agco Tractor Series/agco tractor.webp'), id: 'all' },
        ],
        seriesName: 'AGCO',
        seriesImage: agcoLogo,
        modelImage: agcoDT205B,
    };

    const agcoModels_DT225B = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Agco Tractor Series/agco tractor.webp'), id: 'all' },
        ],
        seriesName: 'AGCO',
        seriesImage: agcoLogo,
        modelImage: agcoDT225B,
    };

    const caterpillarModels_3126B = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Caterpillar Truck Series/Caterpillar Truck.webp'), id: 'all' },
        ],
        seriesName: 'Caterpillar',
        seriesImage: caterpillarLogo,
        modelImage: caterpillarModel3126B,
    };

    const caterpillarModels_3126E = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Caterpillar Truck Series/Caterpillar Truck.webp'), id: 'all' },
        ],
        seriesName: 'Caterpillar',
        seriesImage: caterpillarLogo,
        modelImage: caterpillarModel3126E,
    };

    const mercedesModels_ACTROS = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'), id: 'all' },
        ],
        seriesName: 'Mercedes',
        seriesImage: mercedesLogo,
        modelImage: mercedesModelsACTROS,
    };

    const mercedesModels_AROCS = {
        modelDetails: [
            { name: 'All', logo: require('../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'), id: 'all' },
        ],
        seriesName: 'Mercedes',
        seriesImage: mercedesLogo,
        modelImage: mercedesModelsARCOS,
    };

    let { vehicleBrandId, vehicleSeriesId, vehicleModelId } = useParams();

    const [vehicleModels, setVehicleModels] = useState();

    useEffect(() => {

        // seriesId = replaceAll(seriesId, "-", ' ');

        if (vehicleBrandId === 'cars') {

            if (vehicleSeriesId == 'alfaRomeoSeries') {
                if (vehicleModelId == '147') {
                    setVehicleModels(alfaRomeoModels_147);
                } else if (vehicleModelId == '156') {
                    setVehicleModels(alfaRomeoModels_156);
                }

            } else if (vehicleSeriesId == 'alpinaSeries') {
                if (vehicleModelId == 'b3') {
                    setVehicleModels(alpinaModels_b3);
                } else if (vehicleModelId == 'b3s') {
                    setVehicleModels(alpinaModels_b3s);
                }

            }

        } else if (vehicleBrandId === 'bikes') {
            if (vehicleSeriesId == 'apriliaSeries') {
                if (vehicleModelId == 'dorsoduro') {
                    setVehicleModels(apriliaModels_Dorsoduro);
                } else if (vehicleModelId == 'rsv4') {
                    setVehicleModels(apriliaModels_RSV4);
                }

            } else if (vehicleSeriesId == 'bmwSeries') {
                if (vehicleModelId == 'c') {
                    setVehicleModels(bmwModels_C);
                } else if (vehicleModelId == 'ce04') {
                    setVehicleModels(bmwModels_CE04);
                }

            }

        } else if (vehicleBrandId === 'boats') {
            if (vehicleSeriesId == 'suzuki') {
                if (vehicleModelId == 'DF115') {
                    setVehicleModels(suzukiModels_DF115);
                } else if (vehicleModelId == 'DF140') {
                    setVehicleModels(suzukiModels_DF140);
                }

            } else if (vehicleSeriesId == 'volvoPenta') {
                if (vehicleModelId == 'D3') {
                    setVehicleModels(volvoPentaModels_D3);
                } else if (vehicleModelId == 'D4') {
                    setVehicleModels(volvoPentaModels_D4);
                }

            }

        } else if (vehicleBrandId === 'tractors') {
            if (vehicleSeriesId == 'afmLogman') {
                if (vehicleModelId == '801h4') {
                    setVehicleModels(afmLogmanModels_801h4);
                } else if (vehicleModelId == '811f') {
                    setVehicleModels(afmLogmanModels_811F);
                }

            } else if (vehicleSeriesId == 'agco') {
                if (vehicleModelId == 'DT205B') {
                    setVehicleModels(agcoModels_DT205B);
                } else if (vehicleModelId == 'DT225B') {
                    setVehicleModels(agcoModels_DT225B);
                }

            }

        } else if (vehicleBrandId === 'trucks') {
            if (vehicleSeriesId == 'caterpillar') {
                if (vehicleModelId == '3126B') {
                    setVehicleModels(caterpillarModels_3126B);
                } else if (vehicleModelId == '3126E') {
                    setVehicleModels(caterpillarModels_3126E);
                }

            } else if (vehicleSeriesId == 'mercedes') {
                if (vehicleModelId == 'ACTROS') {
                    setVehicleModels(mercedesModels_ACTROS);
                } else if (vehicleModelId == 'AROCS') {
                    setVehicleModels(mercedesModels_AROCS);
                }

            }
        }

    }, [vehicleBrandId, vehicleSeriesId, vehicleModelId]);

    const navigate = useNavigate();

    const goBackToSeriesSelection = () => {
        navigate(`/${vehicleBrandId}/${vehicleSeriesId}`);
    };

    const goToVehicleEngines = (engineId) => {
        navigate(`/${vehicleBrandId}/${vehicleSeriesId}/${vehicleModelId}/${engineId}`);
    }

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600); // Adjust the breakpoint as needed

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className='flex flex-col sm:flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
                <Link to={`/${vehicleBrandId}`} className='font-bold text-base sm:text-xl'>{`${vehicleBrandId.charAt(0).toUpperCase()}${vehicleBrandId.substring(1,)}`}</Link>
                {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
                <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToSeriesSelection}>
                    <img src={vehicleModels?.seriesImage} className='w-8 h-8' />
                    <p>{vehicleModels?.seriesName}</p>
                </a>
                {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
                <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
                    <img src={vehicleModels?.modelImage} className='w-8 h-6' />
                    <p>{vehicleModelId}</p>
                </a>
            </div>
            <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
                Select the Model for {vehicleModels?.seriesName} {vehicleModelId}
            </h1>
            <div className='flex flex-wrap justify-center gap-8'>
                {vehicleModels?.modelDetails?.map((brand, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip vehicleSeriesCards'
                        style={{ minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                        onClick={() => {
                            goToVehicleEngines(brand.id)
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
                <button className='btnn btnBrandd' style={{ borderRadius: '8px' }} onClick={goBackToSeriesSelection}>Go Back To Series Selection</button>
            </div>
        </div>
    )
}

export default VehicleModels