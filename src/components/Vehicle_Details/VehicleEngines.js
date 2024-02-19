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
import mercedesModelsAROCS from '../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'


const VehicleEngines = () => {
    const alfaRomeo14720012005_Engine = {
        engineDetails: [
            { name: '2.0 TS', description: '150HP Gasoline', logo: require('../../assets/images/Alfa Romeo Car Series/147model.webp'), id: '200120052_0TS' },
            { name: '3.2 V6 GTA', description: '250HP Gasoline', logo: require('../../assets/images/Alfa Romeo Car Series/147model.webp'), id: '200120053_2V6GTA' },
        ],
        seriesName: 'Alfa Romeo',
        seriesImage: alfaRomeoLogo,
        modelImage: alfaRomeoModel147,
        modelName: '2001 2005'
    };

    const alfaRomeo1472005onwards_Engine = {
        engineDetails: [
            { name: '2.0 TS', description: '150HP Gasoline', logo: require('../../assets/images/Alfa Romeo Car Series/147model.webp'), id: '2005onwards2_0TS' },
            { name: '3.2 V6 GTA', description: '250HP Gasoline', logo: require('../../assets/images/Alfa Romeo Car Series/147model.webp'), id: '2005onwards3_2V6GTA' },
        ],
        seriesName: 'Alfa Romeo',
        seriesImage: alfaRomeoLogo,
        modelImage: alfaRomeoModel147,
        modelName: '2005 ...'
    };

    const alfaRomeo15619972003_Engine = {
        engineDetails: [
            { name: '2.5 V6', description: '190HP Gasoline', logo: require('../../assets/images/Alfa Romeo Car Series/156model.webp'), id: '199720032_5V6' },
            { name: '3.2 V6 GTA', description: '250HP Gasoline', logo: require('../../assets/images/Alfa Romeo Car Series/156model.webp'), id: '199720033_2V6GTA' },
        ],
        seriesName: 'Alfa Romeo',
        seriesImage: alfaRomeoLogo,
        modelImage: alfaRomeoModel156,
        modelName: '1997 2003'
    };

    const alfaRomeo15620022005_Engine = {
        engineDetails: [
            { name: '1.9 Jtd', description: '115HP Diesel', logo: require('../../assets/images/Alfa Romeo Car Series/156model.webp'), id: '200220051_9JTD' },
            { name: '1.9 Jtd', description: '126HP Diesel', logo: require('../../assets/images/Alfa Romeo Car Series/156model.webp'), id: '200220051_9Jtd' },
        ],
        seriesName: 'Alfa Romeo',
        seriesImage: alfaRomeoLogo,
        modelImage: alfaRomeoModel156,
        modelName: '2002 2005'
    };

    const alpinaModelsb3backwards2018_Engine = {
        engineDetails: [
            { name: '3.5 i', description: '360HP Gasoline', logo: require('../../assets/images/Alpina Car Series/B3model.webp'), id: 'backwards20183_5i' },
            { name: 'B3 Biturbo', description: '410HP Gasoline', logo: require('../../assets/images/Alpina Car Series/B3model.webp'), id: 'backwards2018B3Biturbo' },
        ],
        seriesName: 'Alpina',
        seriesImage: alpinaLogo,
        modelImage: alpinaB3,
        modelName: '... 2018'
    };

    const alpinaModelsb32019onwards_Engine = {
        engineDetails: [
            { name: '3.0 Bi-Turbo', description: '360HP Gasoline', logo: require('../../assets/images/Alpina Car Series/B3model.webp'), id: '2019onwards3_0biturbo' },
        ],
        seriesName: 'Alpina',
        seriesImage: alpinaLogo,
        modelImage: alpinaB3,
        modelName: '2019 ...'
    };

    const alpinaModelsb3sall_Engine = {
        engineDetails: [
            { name: '3.5 i', description: '400HP Gasoline', logo: require('../../assets/images/Alpina Car Series/B3smodel.webp'), id: 'all3_5i' },
            { name: '3.0 T', description: '440HP Gasoline', logo: require('../../assets/images/Alpina Car Series/B3smodel.webp'), id: 'all3_0T' },
        ],
        seriesName: 'Alpina',
        seriesImage: alpinaLogo,
        modelImage: alpinaB3s,
        modelName: 'All'
    };

    const apriliaDorsoduro20102017_Engine = {
        engineDetails: [
            { name: '750', description: '92HP General', logo: require('../../assets/images/Aprilia Bike Series/DorsoduroModel.webp'), id: '20102017_750' },
        ],
        seriesName: 'Dorsoduro',
        seriesImage: apriliaLogo,
        modelImage: apriliaModelDorsoduro,
        modelName: '2010 2017'
    };

    const apriliaDorsoduro2010onwards_Engine = {
        engineDetails: [
            { name: '750', description: '92HP General', logo: require('../../assets/images/Aprilia Bike Series/DorsoduroModel.webp'), id: '2010onwards_750' },
        ],
        seriesName: 'Dorsoduro',
        seriesImage: apriliaLogo,
        modelImage: apriliaModelDorsoduro,
        modelName: '2010 ...'
    };

    const apriliarsv420102015_Engine = {
        engineDetails: [
            { name: 'RSV4 1000 Factory', description: '180HP General', logo: require('../../assets/images/Aprilia Bike Series/RSV4.webp'), id: '20102015_1000factory' },
            { name: 'RSV4 1000', description: '180HP General', logo: require('../../assets/images/Aprilia Bike Series/RSV4.webp'), id: '20102015_1000' },
        ],
        seriesName: 'RSV4',
        seriesImage: apriliaLogo,
        modelImage: apriliaModelRSV4,
        modelName: '2010 2015'
    };

    const apriliarsv42015Onwards_Engine = {
        engineDetails: [
            { name: 'RSV4 1000 RF / RR', description: '201HP Gasoline', logo: require('../../assets/images/Aprilia Bike Series/RSV4.webp'), id: '2015Onwards_1000rfrr' },
        ],
        seriesName: 'RSV4',
        seriesImage: apriliaLogo,
        modelImage: apriliaModelRSV4,
        modelName: '2015 ...'
    };

    const bmwCAll_Engine = {
        engineDetails: [
            { name: '650 GT', description: '60HP Gasoline', logo: require('../../assets/images/BMW Bike Series/CModel.webp'), id: 'all_650gt' },
            { name: '600 Sport', description: '60HP Gasoline', logo: require('../../assets/images/BMW Bike Series/CModel.webp'), id: 'all_650sport' },
        ],
        seriesName: 'BMW',
        seriesImage: bmwLogo,
        modelImage: bmwModelC,
        modelName: 'All'
    };

    const bmwCE042021onwards_Engine = {
        engineDetails: [
            { name: 'CE 04', description: '15HP General', logo: require('../../assets/images/BMW Bike Series/CE04model.webp'), id: '2021onwards_ce0415hp' },
            { name: 'CE 04', description: '20HP General', logo: require('../../assets/images/BMW Bike Series/CE04model.webp'), id: '2021onwards_ce0420hp' },
        ],
        seriesName: 'BMW',
        seriesImage: bmwLogo,
        modelImage: bmwModelCE04,
        modelName: '2021 ...'
    };

    const suzukiDF115All_Engine = {
        engineDetails: [
            { name: 'DF 115', description: '115HP General', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: 'all_Df115' },
        ],
        seriesName: 'Suzuki',
        seriesImage: suzukiLogo,
        modelImage: suzukiDF115,
        modelName: 'All'
    };

    const suzukiDF140All_Engine = {
        engineDetails: [
            { name: 'DF 140', description: '140HP Gasoline', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: 'all_Df140' },
        ],
        seriesName: 'Suzuki',
        seriesImage: suzukiLogo,
        modelImage: suzukiDF140,
        modelName: 'All'
    };

    const volvoPentaD32009onwards_Engine = {
        engineDetails: [
            { name: 'D3-200A', description: '200HP Diesel', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: '2009onwards_D3200A' },
            { name: 'D3-220A', description: '220HP Diesel', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: '2009onwards_D3220A' },
        ],
        seriesName: 'Volvo Penta',
        seriesImage: volvoPentaLogo,
        modelImage: volvoPentaD3,
        modelName: '2009 ...'
    };

    const volvoPentaD4all_Engine = {
        engineDetails: [
            { name: 'D4', description: '260HP Diesel', logo: require('../../assets/images/Suzuki Boat Series/logo-tuning-x.png'), id: 'all_D4' },
        ],
        seriesName: 'Volvo Penta',
        seriesImage: volvoPentaLogo,
        modelImage: volvoPentaD4,
        modelName: 'All'
    };

    const afmLogman801h4all_Engine = {
        engineDetails: [
            { name: '4.9 SISU 49CWA 163HP', description: '163HP Gasoline', logo: require('../../assets/images/Afm Logman Tractor Series/afm logman tractor.webp'), id: 'all_49sisu49cwa' },
        ],
        seriesName: 'AFM LOGMAN',
        seriesImage: afmLogmanLogo,
        modelImage: afmLogman801h4,
        modelName: 'All'
    };

    const afmLogman811fall_Engine = {
        engineDetails: [
            { name: '4.9 SISU 49CWA 163HP', description: '163HP Gasoline', logo: require('../../assets/images/Afm Logman Tractor Series/afm logman tractor.webp'), id: 'all_49sisu49cwa163hp' },
        ],
        seriesName: 'AFM LOGMAN',
        seriesImage: afmLogmanLogo,
        modelImage: afmLogman811f,
        modelName: 'All'
    };

    const agcoModelsDT205Ball_Engine = {
        engineDetails: [
            { name: 'All', description: '241HP Gasoline', logo: require('../../assets/images/Agco Tractor Series/agco tractor.webp'), id: 'all' },
        ],
        seriesName: 'AGCO',
        seriesImage: agcoLogo,
        modelImage: agcoDT205B,
        modelName: 'All'
    };

    const agcoModelsDT225Ball_Engine = {
        engineDetails: [
            { name: '8.4 265HP', description: '265HP Diesel', logo: require('../../assets/images/Agco Tractor Series/agco tractor.webp'), id: 'all_84265hp' },
        ],
        seriesName: 'AGCO',
        seriesImage: agcoLogo,
        modelImage: agcoDT225B,
        modelName: 'All'
    };

    const caterpillar3126Ball_Engine = {
        engineDetails: [
            { name: '7.2 193HP', description: '193HP Gasoline', logo: require('../../assets/images/Caterpillar Truck Series/Caterpillar Truck.webp'), id: 'all_72193' },
            { name: '7.2 234HP', description: '234HP Gasoline', logo: require('../../assets/images/Caterpillar Truck Series/Caterpillar Truck.webp'), id: 'all_72234' },
        ],
        seriesName: 'Caterpillar',
        seriesImage: caterpillarLogo,
        modelImage: caterpillarModel3126B,
        modelName: 'All'
    };

    const caterpillar3126Eall_Engine = {
        engineDetails: [
            { name: '7.2 253HP', description: '253HP Gasoline', logo: require('../../assets/images/Caterpillar Truck Series/Caterpillar Truck.webp'), id: 'all_72253' },
            { name: '7.2 193HP', description: '193HP Gasoline', logo: require('../../assets/images/Caterpillar Truck Series/Caterpillar Truck.webp'), id: 'all_72193hp' },
        ],
        seriesName: 'Caterpillar',
        seriesImage: caterpillarLogo,
        modelImage: caterpillarModel3126E,
        modelName: 'All'
    };

    const mercedesACTROSall_Engine = {
        engineDetails: [
            { name: '18 31 EURO 3', description: '313HP Gasoline', logo: require('../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'), id: 'all_1831' },
            { name: '18 32 EURO 3+4+5', description: '330HP Gasoline', logo: require('../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'), id: 'all_1832' },
        ],
        seriesName: 'Mercedes',
        seriesImage: mercedesLogo,
        modelImage: mercedesModelsACTROS,
        modelName: 'All'
    };

    const mercedesAROCSall_Engine = {
        engineDetails: [
            { name: 'EURO VI', description: '115HP Diesel', logo: require('../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'), id: 'all_eurovi' },
        ],
        seriesName: 'Mercedes',
        seriesImage: mercedesLogo,
        modelImage: mercedesModelsAROCS,
        modelName: 'All'
    };

    let { vehicleBrandId, vehicleSeriesId, vehicleModelId, vehicleEngineId } = useParams();

    const [vehicleEngines, setVehicleEngines] = useState();

    useEffect(() => {

        // seriesId = replaceAll(seriesId, "-", ' ');

        if (vehicleBrandId === 'cars') {

            if (vehicleSeriesId == 'alfaRomeoSeries') {
                if (vehicleModelId == '147') {
                    if (vehicleEngineId == '20012005') {
                        setVehicleEngines(alfaRomeo14720012005_Engine);
                    } else if (vehicleEngineId == '2005onwards') {
                        setVehicleEngines(alfaRomeo1472005onwards_Engine);
                    }

                } else if (vehicleModelId == '156') {
                    if (vehicleEngineId == '19972003') {
                        setVehicleEngines(alfaRomeo15619972003_Engine);
                    } else if (vehicleEngineId == '20022005') {
                        setVehicleEngines(alfaRomeo15620022005_Engine);
                    }

                }

            } else if (vehicleSeriesId == 'alpinaSeries') {
                if (vehicleModelId == 'b3') {
                    if (vehicleEngineId == 'backwards2018') {
                        setVehicleEngines(alpinaModelsb3backwards2018_Engine);
                    } else if (vehicleEngineId == '2019onwards') {
                        setVehicleEngines(alpinaModelsb32019onwards_Engine);
                    }

                } else if (vehicleModelId == 'b3s') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(alpinaModelsb3sall_Engine);
                    }

                }

            }

        } else if (vehicleBrandId === 'bikes') {
            if (vehicleSeriesId == 'apriliaSeries') {
                if (vehicleModelId == 'dorsoduro') {
                    if (vehicleEngineId == '20102017') {
                        setVehicleEngines(apriliaDorsoduro20102017_Engine);
                    } else if (vehicleEngineId = "2010onwards") {
                        setVehicleEngines(apriliaDorsoduro2010onwards_Engine);
                    }

                } else if (vehicleModelId == 'rsv4') {
                    if (vehicleEngineId == '20102015') {
                        setVehicleEngines(apriliarsv420102015_Engine);
                    } else if (vehicleEngineId == '2015onwards') {
                        setVehicleEngines(apriliarsv42015Onwards_Engine);
                    }

                }

            } else if (vehicleSeriesId == 'bmwSeries') {
                if (vehicleModelId == 'c') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(bmwCAll_Engine);
                    }

                } else if (vehicleModelId == 'ce04') {
                    if (vehicleEngineId == '2021onwards') {
                        setVehicleEngines(bmwCE042021onwards_Engine);
                    }

                }

            }

        } else if (vehicleBrandId === 'boats') {
            if (vehicleSeriesId == 'suzuki') {
                if (vehicleModelId == 'DF115') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(suzukiDF115All_Engine);
                    }

                } else if (vehicleModelId == 'DF140') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(suzukiDF140All_Engine);
                    }

                }

            } else if (vehicleSeriesId == 'volvoPenta') {
                if (vehicleModelId == 'D3') {
                    if (vehicleEngineId == '2009onwards') {
                        setVehicleEngines(volvoPentaD32009onwards_Engine);
                    }

                } else if (vehicleModelId == 'D4') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(volvoPentaD4all_Engine);
                    }

                }

            }

        } else if (vehicleBrandId === 'tractors') {
            if (vehicleSeriesId == 'afmLogman') {
                if (vehicleModelId == '801h4') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(afmLogman801h4all_Engine);
                    }

                } else if (vehicleModelId == '811f') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(afmLogman811fall_Engine);
                    }

                }

            } else if (vehicleSeriesId == 'agco') {
                if (vehicleModelId == 'DT205B') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(agcoModelsDT205Ball_Engine);
                    }

                } else if (vehicleModelId == 'DT225B') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(agcoModelsDT225Ball_Engine);
                    }

                }

            }

        } else if (vehicleBrandId === 'trucks') {
            if (vehicleSeriesId == 'caterpillar') {
                if (vehicleModelId == '3126B') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(caterpillar3126Ball_Engine);
                    }

                } else if (vehicleModelId == '3126E') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(caterpillar3126Eall_Engine);
                    }

                }

            } else if (vehicleSeriesId == 'mercedes') {
                if (vehicleModelId == 'ACTROS') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(mercedesACTROSall_Engine);
                    }

                } else if (vehicleModelId == 'AROCS') {
                    if (vehicleEngineId == 'all') {
                        setVehicleEngines(mercedesAROCSall_Engine);
                    }

                }

            }
        }

    }, [vehicleBrandId, vehicleSeriesId, vehicleModelId, vehicleEngineId]);

    const navigate = useNavigate();

    const goBackToSeriesSelection = () => {
        navigate(`/${vehicleBrandId}/${vehicleSeriesId}`);
    };

    const goBackToModelSelection = () => {
        navigate(`/${vehicleBrandId}/${vehicleSeriesId}/${vehicleModelId}`);
    };

    const goToVehicleChipTuningPage = (chipTuningId) => {
        navigate(`/${vehicleBrandId}/${vehicleSeriesId}/${vehicleModelId}/${vehicleEngineId}/${chipTuningId}`);
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
                    <img src={vehicleEngines?.seriesImage} alt="" className='w-8 h-8' />
                    <p>{vehicleEngines?.seriesName}</p>
                </a>
                {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
                <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToModelSelection}>
                    <img src={vehicleEngines?.modelImage} alt="" className='w-8 h-6' />
                    <p>{vehicleModelId}</p>
                </a>
                {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
                <p className='font-bold text-base sm:text-xl'>{vehicleEngines?.modelName}</p>
            </div>
            <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
                Select the Engine for {vehicleEngines?.seriesName} {vehicleModelId} {vehicleEngines?.modelName}
            </h1>
            <div className='flex flex-wrap justify-center gap-8'>
                {vehicleEngines?.engineDetails?.map((brand, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip vehicleSeriesCards'
                        style={{ minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                        onClick={() => {
                            goToVehicleChipTuningPage(brand.id);
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
                <button className='btnn btnBrandd' style={{ borderRadius: '8px' }} onClick={goBackToModelSelection}>Go Back To Model Selection</button>
            </div>
        </div>
    )
}

export default VehicleEngines