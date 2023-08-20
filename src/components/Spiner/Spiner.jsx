import { ThreeDots } from 'react-loader-spinner';

const Spiner = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="pink"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Spiner;
