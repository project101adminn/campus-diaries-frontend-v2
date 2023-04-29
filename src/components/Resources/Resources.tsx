import React from 'react'
import { studyMaterial } from '../../common/study_material'
import ResouceCard from "./ResourceCard"
import Wrapper from '../../common/components/Wrapper'


type Props = {}

const Resources = (props: Props) => {
  return (
    <Wrapper className="okay">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {studyMaterial?.map((studyMaterial) => (
            <ResouceCard key={studyMaterial?.id} ImgSrc={studyMaterial.imageSrc} route={`/study_material/${studyMaterial.imageAlt}`} ImgAlt={studyMaterial.imageAlt} name={studyMaterial.name} />
          ))}
        </div>
        </Wrapper>
  )
}

export default Resources