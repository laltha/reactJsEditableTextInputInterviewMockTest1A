import {Component} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  InputContainer,
  Paragraph,
  Input,
  Button,
} from './styledComponents'

class Home extends Component {
  state = {input: '', isSave: false}

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onChangeSave = event => {
    event.preventDefault()
  }

  onClickButton = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  render() {
    const {input, isSave} = this.state
    const buttonText = isSave ? 'Edit' : 'Save'
    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isSave ? (
              <Paragraph>{input}</Paragraph>
            ) : (
              <Input type="text" onChange={this.onChangeInput} value={input} />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </InputContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}

export default Home
