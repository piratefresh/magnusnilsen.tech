import { CustomPortableText } from 'components/shared/CustomPortableText'
import { MeshGradient } from 'components/shared/MeshGradient'

const gradientColors: Record<any, any> = {
  blue: [
    [254, 193, 99],
    [238, 131, 59],
    [222, 67, 19],
  ],
  purple: [
    [150, 69, 235],
    [11, 21, 136],
    [106, 57, 224],
  ],
  pink: [
    [116, 6, 116],
    [238, 103, 176],
    [144, 12, 125],
  ],
  red: [
    [83, 10, 6],
    [172, 22, 52],
    [189, 38, 13],
  ],
  orange: [
    [255, 151, 31],
    [112, 0, 0],
    [250, 137, 51],
  ],
  green: [
    [10, 80, 28],
    [42, 150, 140],
    [22, 160, 59],
  ],
}

export const AboutMeWidget = ({
  title,
  description,
}: {
  title: string
  description?: any[]
}) => {
  const gradient = gradientColors['blue']
  return (
    <div
      className="relative max-w-400 rounded-[12px] p-4"
      style={{
        background:
          'linear-gradient(135deg, #FEC163 0%, #EE833B 49.48%, #DE4313 100%)',
      }}
    >
      {/* <div className="absolute inset-0 h-full w-full">
        <MeshGradient
          backgroundColor="#FEC163"
          u_c1={gradient[0]}
          u_c2={gradient[1]}
          u_c3={gradient[2]}
        />
      </div> */}
      <div className="relative">
        <h2 className="my-4 text-4xl text-white">{title}</h2>
        <p className="mb-4 text-white">
          <CustomPortableText value={description} />
        </p>
      </div>
    </div>
  )
}
