import {
  ChoiceItemContainer,
  ChoiceButton,
  ButtonImage,
} from './styledComponents'

const PlayingView = props => {
  const {details, onSelectedButton} = props
  const {id, imageUrl} = details

  const testid = id.toLowerCase()
  const testIdName = `${testid}Button`

  const buttonClicked = () => {
    onSelectedButton(id)
  }

  return (
    <ChoiceItemContainer>
      <ChoiceButton
        data-testid={testIdName}
        onClick={buttonClicked}
        type="button"
      >
        <ButtonImage alt={id} src={imageUrl} />
      </ChoiceButton>
    </ChoiceItemContainer>
  )
}
export default PlayingView
