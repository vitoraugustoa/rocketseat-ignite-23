import { styled } from "@/styles/stitches.config"

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Product({ params }: { params: { id: string } }) {
  return <div>
    <span>
      Product: {params.id}
    </span>
     <Button>Teste</Button>
     </div>
}