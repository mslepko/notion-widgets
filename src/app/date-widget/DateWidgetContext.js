import { useSearchParams } from 'next/navigation';

const DateWidgetConfig = () => {
  const allowedConfigs = ['time', 'date','day', 'quarter', 'seconds', 'minutes', 'tz', 'locale', 'labels']
  const searchParams = useSearchParams()
  const dateWidgetConfig = {}
  
  allowedConfigs.forEach(element => {
    dateWidgetConfig[element] = searchParams.has(element) ? searchParams.get(element) : true
  });
  
  return (dateWidgetConfig)
}

export default DateWidgetConfig;
