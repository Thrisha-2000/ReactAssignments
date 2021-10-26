import React from "react";
import Center from "../Center/Center";
import Button from "./Button";
import { action } from '@storybook/addon-actions'


export default {
    title: 'Form/Button',
    component: Button,
    // args: {
    //     children: 'Button'
    // }
    decorators: [story => <Center>{story()}</Center>],
    

}

// export const Primary = () => <Button variant='primary'>Primary</Button>
// export const Secondary = () => <Button variant='secondary'>Secondary</Button>
// export const Success = () => <Button variant='success'>Success</Button>
// export const Danger = () => <Button variant='danger'>Danger</Button>


const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    children: 'Primary',
    onClick: action('primary clicked')
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary',
    onClick: action('secondary clicked')
}

export const Success = Template.bind({})
Success.args = {
    variant: 'success',
    children: 'Success',
    onClick: action('success clicked')
}

export const Danger = Template.bind({})
Danger.args = {
    variant: 'danger',
    children: 'Danger',
    onClick: action('danger clicked')
}