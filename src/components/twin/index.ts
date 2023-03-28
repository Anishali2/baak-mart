import tw from 'twin.macro'

export const Text = tw.div` text-white`
export const SmallText = tw.div` text-white text-xs`
export const SmallTextLight = tw.span` text-white text-xs text-secondaryLight`
// create all the text components like h1, h2, h3, p, span, etc with respective styles

// create a varient of the text component
export const Card = tw.div`border border-secondary rounded-main p-2`
export const CloseBtn = tw.div`border absolute top-3 right-3 border-secondary rounded-md p-2`
export const Flex = tw.div`flex`
export const JustifyBetween = tw.div`flex justify-between items-center`
export const JustifyCenter = tw.div`flex justify-center items-center`
export const JustifyCenterCol = tw.div`flex justify-center items-center  flex-col`
export const JustifyEnd = tw.div`flex justify-end items-center`
export const Shrink_0 = tw.div`shrink-0`
export const Line = tw.div`border-b-[0.1px] border-secondary `
export const InputLarge = tw.input`block w-full m-0 px-3 py-3 lg:text-[14px] leading-5 font-medium   placeholder-secondaryLight bg-transparent border border-secondary text-white hover:border-red-100 focus:border-red-200  rounded-main focus:outline-none focus:bg-[#191C1F]  focus:ring-white  sm:text-sm transition-all ease-in duration-300`
export const Input = tw.input`block w-full m-0 px-3 py-2 leading-5 font-medium   placeholder-secondaryLight bg-transparent border border-secondary text-white hover:border-red-100 focus:border-red-200  rounded-main focus:outline-none focus:bg-[#191C1F]  focus:ring-white  sm:text-sm transition-all ease-in duration-300`
export const TextArea = tw.textarea`block w-full px-3 py-2 leading-5  placeholder-secondaryLight bg-transparent border border-secondary text-white hover:border-red-100 focus:border-red-200  rounded-main focus:outline-none focus:bg-[#191C1F]  focus:ring-white  sm:text-sm transition-all ease-in duration-75`
export const Heading = tw.h1`text-2xl font-bold `
export const Space = tw.div`h-2`
export const Bold = tw.span` font-bold text-white `
export const BoldLight = tw.span` font-bold text-secondary `
export const BoldSmall = tw.span` font-bold text-white text-xs`
export const BoldSmallLight = tw.span` font-bold text-xs text-secondaryLight`
export const SimpleText = tw.p`text-sm md:text-lg lg:text-xl`
export const ModalTitle = tw.span`font-bold text-white text-2xl`
export const Paragraph = tw.p`text-sm text-secondaryLight`
export const Link = tw.a`text-blue-500 cursor-pointer hover:border-b-2`
export const Centered = tw.div` flex justify-center items-center`
