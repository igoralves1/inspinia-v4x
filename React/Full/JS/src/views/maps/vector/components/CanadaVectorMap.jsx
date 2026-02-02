import BaseVectorMap from '@/components/maps/BaseVectorMap';
import 'jsvectormap';
import 'jsvectormap/dist/maps/canada';
import { getCanadaMapOptions } from '@/views/maps/vector/data';
const CanadaVectorMap = () => {
  return <BaseVectorMap id="canada-map" options={getCanadaMapOptions()} style={{
    height: 360
  }} />;
};
export default CanadaVectorMap;