import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input variant='small' placeholder='Small'></Input>
export const Medium = () => <Input variant='medium' placeholder='Medium'></Input>
export const Large = () => <Input variant='large' placeholder='Large'></Input>

// Small.storyName = 'Small Input'
