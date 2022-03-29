import { BtnCancel } from './components/BtnCancel'
import { BtnSearch } from './components/BtnSearch'
import { Input } from './components/Input'
import { InputWrapper } from './components/InputWrapper'
import { Wrapper } from './components/Wrapper'
import { Hints } from './components/Hints'
import { TagsInHints } from './components/TagsInHints'
import { PostsInHints } from './components/PostsInHints'
import { ItemsInInput } from './components/ItemsInInput'


export default function Search() {

  return (
    <div className='container'>
      <Wrapper>
        <InputWrapper>
          <ItemsInInput />
          <Input /> 
          <BtnCancel />
        </InputWrapper>
        <BtnSearch />
        <Hints>
          <TagsInHints />
          <PostsInHints />
        </Hints>
      </Wrapper>

      <style jsx>{`
        .container {
          display: inline-flex;
          justify-content: space-between;
          align-items: stretch;
          margin: 0 auto;
          width: 90vw;
          margin-top: 30px;
          height: 40px;
          max-width: 550px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
      `}</style>
    </div>
  )
}
