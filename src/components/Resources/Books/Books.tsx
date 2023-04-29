import React from 'react'
import Wrapper from '../../../common/components/Wrapper'
import { books } from '../../../common/books'
import ResourceCard from '../ResourceCard'

type Props = {}

function Books({}: Props) {
  return (
    <Wrapper className="h-[92vh] hide-scrollbar overflow-y-scroll">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {books?.map((book) => (
            <ResourceCard key={book?.id} ImgSrc={book.imageSrc} route={`/study_material/books/${book.imageAlt}`} ImgAlt={book.imageAlt} name={book.name} />
          ))}
        </div>
        </Wrapper>

    
  )
}

export default Books



