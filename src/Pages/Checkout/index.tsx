import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { AddressForm } from './components/AddressForm'
import styles from './styles.module.scss'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react';
import { ButtonPaymentType } from './components/ButtonPaymentType';
import { CoffeeCheckoutCard } from './components/CoffeeCheckoutCard';
import { coffeesList } from '../../constants/coffeelist';

const addressFormvalidations = zod.object({
  cep: zod.string().trim().min(14, 'CEP inválido'),
  rua: zod.string().trim().min(1, 'Rua obrigatória'),
  numero: zod.string().min(1, 'Número obrigatório'),
  complemento: zod.string(),
  bairro: zod.string().trim().min(1, 'Bairro obrigatório'),
  cidade: zod.string().trim().min(1, 'Cidade obrigatório'),
  uf: zod.string().trim().min(2, 'UF obrigatório'),
  paymentType: zod.string().trim().min(2, 'Forma de pagamento obrigatória'),
})

type addressFormData = zod.infer<typeof addressFormvalidations>

export function Checkout() {
  const addressForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormvalidations),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      paymentType: ''
    }
  })
  const { handleSubmit, watch, formState, setValue } = addressForm
  const paymentForm = watch('paymentType')
  const { errors } = formState

  function selectPaymentType(data: string) {
    setValue('paymentType', data)
  }


  function confirmCheckout(data: addressFormData) {
    console.log(data)
  }
  return (
    <form className={styles.checkoutContainer} onSubmit={handleSubmit(confirmCheckout)}>

      <div className={styles.contentContainer}>
        <h3>Complete seu pedido</h3>

        <div className={styles.addressContainer}>
          <div className={styles.addressFormHeader}>
            <MapPinLine size={22} />
            <div className={styles.addressFormHeaderTextContainer}>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>
        </div>

        <div className={styles.paymentTypeContainer}>
          <div className={styles.paymentTypeHeader}>
            <CurrencyDollar size={22} />
            <div className={styles.paymentTypeHeaderTextContainer}>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </div>
          <div className={styles.paymentTypeButtonsContainer}>
            <ButtonPaymentType onClick={() => selectPaymentType('cartão de crédito')} selected={paymentForm}>
              cartão de crédito
            </ButtonPaymentType>

            <ButtonPaymentType onClick={() => selectPaymentType('cartão de débito')} selected={paymentForm}>
              cartão de débito
            </ButtonPaymentType>

            <ButtonPaymentType onClick={() => selectPaymentType('dinheiro')} selected={paymentForm}>
              dinheiro
            </ButtonPaymentType>
          </div>

        </div>
      </div>

      <div className={styles.contentContainer}>
        <h3>Cafés selecionados</h3>
        <div className={styles.totalContainer}>
          <div className={styles.coffeesList}>
            <div>
              <CoffeeCheckoutCard count={3} img={coffeesList[0].img} price={coffeesList[0].price} title={coffeesList[0].title} />
              <hr />
            </div>

            <div>
              <CoffeeCheckoutCard count={3} img={coffeesList[0].img} price={coffeesList[0].price} title={coffeesList[0].title} />
              <hr />
            </div>
          </div>

          <div className={styles.paymentTotalContainer}>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>

            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </div>

          <button className={styles.checkoutConfirmButton} type='submit'>
            confirmar pedido
          </button>
        </div>
      </div>

    </form>
  )
}