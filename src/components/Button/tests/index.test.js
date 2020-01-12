import React from 'react';
import Button from 'components/Button';
import renderer from 'react-test-renderer';

describe('Button', () => {

    const onClickMock = jest.fn();

    let buttonProps = {
        onClick: onClickMock,
        title:'',
        type:'',
        disabled: false
    }

    it('renders without crashing', async () => {
        const component= renderer.create(<Button {...buttonProps}/>)
        let tree=component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});