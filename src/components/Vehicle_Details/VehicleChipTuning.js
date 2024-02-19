import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate, useParams } from 'react-router-dom';
import boreXIcon from '../../assets/images/bore-x-stroke-icon.svg'
import engineIcon from '../../assets/images/engine-code-icon.svg';
import { FaAngleDown } from "react-icons/fa6";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { PiEngineBold } from "react-icons/pi";
import { PiLightningBold } from "react-icons/pi";
import alfaRomeoLogo from '../../assets/images/alfa-romeo-logo.webp';
import alfaRomeoModel147 from '../../assets/images/Alfa Romeo Car Series/147model.webp'
import './VehicleChipTuning.css'

const VehicleChipTuning = () => {

  let { vehicleBrandId, vehicleSeriesId, vehicleModelId, vehicleEngineId } = useParams();

  const TotalDataChipTuning = {
    seriesName: 'Alfa Romeo',
    seriesImage: alfaRomeoLogo,
    modelImage: alfaRomeoModel147,
    modelName: '2001 2005',
    engineType: '2.0 TS',
    fuelType: 'Gasoline',
    standardHP: '150',
    standardNM: '172',
    stagesResult: [{ HP: { Stock: 150, Tuning: 164 }, NM: { Stock: 172, Tuning: 191 } }, { HP: { Stock: 170, Tuning: 190 }, NM: { Stock: 184, Tuning: 200 } }],
    engineDetails: [{ image: boreXIcon, details: '83,0 x 91,0 mm' }, { image: engineIcon, details: '937A2000' },]
  }

  let [accordionOpen, setAccordionOpen] = useState([]);

  useEffect(() => {
    let x = Array(TotalDataChipTuning.stagesResult.length).fill(false);
    setAccordionOpen(x);
  }, []);

  const toggleAccordion = (index) => {
    setAccordionOpen((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  const navigate = useNavigate();

  const goBackToSeriesSelection = () => {
    navigate(`/${vehicleBrandId}/${vehicleSeriesId}`);
  };

  const goBackToModelSelection = () => {
    navigate(`/${vehicleBrandId}/${vehicleSeriesId}/${vehicleModelId}`);
  };

  const goBackToEngineSelection = () => {
    navigate(`/${vehicleBrandId}/${vehicleSeriesId}/${vehicleModelId}/${vehicleEngineId}`);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

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
          <img src={TotalDataChipTuning?.seriesImage} className='w-8 h-8' />
          <p>{TotalDataChipTuning?.seriesName}</p>
        </a>
        {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToModelSelection}>
          <img src={TotalDataChipTuning?.modelImage} className='w-8 h-6' />
          <p>{vehicleModelId}</p>
        </a>
        {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
        <a className='font-bold text-base sm:text-xl cursor-pointer' onClick={goBackToEngineSelection}>{TotalDataChipTuning?.modelName}</a>
        {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
        <p className='font-bold text-base sm:text-xl'>{`${TotalDataChipTuning.engineType} (${TotalDataChipTuning.standardHP} HP / ${TotalDataChipTuning.standardNM} NM)`}</p>
      </div>

      <div className='flex items-center justify-center'>
        <div className='flex flex-col sm:flex-row items-center justify-center p-10 md:p-16' style={{ background: '#dbdbdb', borderRadius: '20px', gap: '40px' }}>
          <img src={TotalDataChipTuning.modelImage} />
          <div className='flex gap-5 flex-col'>
            <div className='flex flex-row font-bold items-center gap-2'>
              <img src={TotalDataChipTuning.seriesImage} className='w-8 h-8' />
              <h2 className='text-2xl'>Chiptuning For {TotalDataChipTuning.seriesName}</h2>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <p className='font-bold'>Series: </p>
              <p>{vehicleModelId}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <p className='font-bold'>Model: </p>
              <p>{TotalDataChipTuning.modelName}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <p className='font-bold'>Engine: </p>
              <p>{TotalDataChipTuning.engineType}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row gap-2 items-center'>
                <BsFillFuelPumpDieselFill className='fuelTypeChiptuning' />
                <div className='flex flex-row gap-2'>
                  <p className='font-bold'>Fuel Type: </p>
                  <p>{TotalDataChipTuning.fuelType}</p>
                </div>
              </div>

              <div className='flex flex-row gap-2 items-center'>
                <PiEngineBold className='fuelTypeChiptuning' />
                <div className='flex flex-row gap-2'>
                  <p className='font-bold'>Standard HP: </p>
                  <p>{TotalDataChipTuning.standardHP}</p>
                </div>
              </div>

              <div className='flex flex-row gap-2 items-center'>
                <PiLightningBold className='fuelTypeChiptuning' />
                <div className='flex flex-row gap-2'>
                  <p className='font-bold'>Standard Nm: </p>
                  <p>{TotalDataChipTuning.standardNM}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center flex-col'>
        <div>
          <h1 className='mt-6 font-bold text-2xl'>Performance Results</h1>
        </div>

        {TotalDataChipTuning?.stagesResult?.map((brand, index) => (
          <div className='p-4 bg-gray-300 rounded-lg mt-6 mb-6 tableAccordion'>
            <div className='py-2'>
              <button onClick={() => toggleAccordion(index)} className='flex justify-between w-full'>
                <span className='font-bold'>Stage {index + 1} ( +{brand.HP.Tuning - brand.HP.Stock}Hp / +{brand.NM.Tuning - brand.NM.Stock}Nm )</span>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <svg
                  className="text-black shrink-0 ml-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${accordionOpen[index] && "!rotate-180"
                      }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[index] && "!rotate-180"
                      }`}
                  />
                </svg>
              </button>
              <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen[index] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden'>
                  <div>
                    <table className='w-full text-center mt-8'>
                      <thead className='font-bold'>
                        <tr>
                          <th className='p-1 sm:p-3 text-base sm:text-lg'></th>
                          <th className='p-1 sm:p-3 text-base sm:text-lg'>Stock</th>
                          <th className='p-1 sm:p-3 text-base sm:text-lg'>Tuning</th>
                          <th className='p-1 sm:p-3 text-base sm:text-lg'>Difference</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='p-0 sm:p-1 font-bold text-base sm:text-lg'>Hp</td>
                          <td>{brand.HP.Stock}</td>
                          <td>{brand.HP.Tuning}</td>
                          <td className='font-bold' style={{ color: '#1a71bd' }}>+{brand.HP.Tuning - brand.HP.Stock}Hp</td>
                        </tr>
                        <tr>
                          <td className='p-0 sm:p-1 font-bold text-base sm:text-lg'>Nm</td>
                          <td>{brand.NM.Stock}</td>
                          <td>{brand.NM.Tuning}</td>
                          <td className='font-bold' style={{ color: '#1a71bd' }}>+{brand.NM.Tuning - brand.NM.Stock}Nm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className='flex items-center justify-center flex-col'>
        <div>
          <h1 className='mt-6 font-bold text-2xl'>Engine Details</h1>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
          {TotalDataChipTuning?.engineDetails?.map((brand, index) => (
            <div className='flex flex-col items-center justify-center mt-6'>
              <img src={brand.image} className='w-20 h-20' />
              <p>{brand.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center mt-6'>
        {TotalDataChipTuning?.stagesResult?.map((brand, index) => (
          <div className='flex items-center justify-center mb-6'>
            <BarChart
              width={500}
              height={300}
              data={[
                {
                  name: 'Power',
                  tuning: brand.HP.Tuning,
                  original: brand.HP.Stock,
                },
                {
                  name: 'Torque',
                  tuning: brand.NM.Tuning,
                  original: brand.NM.Stock,
                },
              ]}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" domain={[0, 300]} />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" domain={[0, 300]} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="original" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="tuning" fill="#82ca9d" />
            </BarChart>
          </div>
        ))}
      </div>

      <div className='mt-12 mb-6 flex items-center justify-end p-6 backButtonBrand'>
        <button className='btnn btnBrandd' style={{ borderRadius: '8px' }} onClick={goBackToEngineSelection}>Go Back To Engine Selection</button>
      </div>
    </div>
  )
}

export default VehicleChipTuning