export type ButtonProps = {
    type: 'button' | 'submit',
    title: string,
    variant: 'btn_primary-green' | 'btn_primary_border' | 'btn_white' | 'btn_card' | 'btn_contact' | 'btn_submit'
}

export type FeatureItemProps = {
    title: string,
    imageUrl: string,
    description: string
}