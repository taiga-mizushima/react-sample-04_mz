import { Button } from 'antd';

export const AntButton = (props) => {
    const { children } = props
    return (
      <Button type="primary" shape="round" size="middle">
        { children }
      </Button>
    );
};
