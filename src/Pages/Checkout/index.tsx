import toast from 'react-hot-toast';
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { AddressForm } from './components/AddressForm'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react';
import { ButtonPaymentType } from './components/ButtonPaymentType';
import { CoffeeCheckoutCard } from './components/CoffeeCheckoutCard';
import styles from './styles.module.scss'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoffeeDelivery } from '../../contexts/CoffeeDelivery';
import { formatCurrency } from '../../services/utils';

const addressFormvalidations = zod.object({
  cep: zod.string().trim().min(8, 'CEP Obrigatório'),
  rua: zod.string().trim().min(1, 'Rua Obrigatória'),
  numero: zod.string().min(1, 'Número Obrigatório'),
  complemento: zod.string(),
  bairro: zod.string().trim().min(1, 'Bairro Obrigatório'),
  cidade: zod.string().trim().min(1, 'Cidade Obrigatório'),
  uf: zod.string().trim().min(2, 'UF Obrigatório'),
  paymentType: zod.string().trim().min(2, 'Forma De Pagamento Obrigatória'),
})

type addressFormData = zod.infer<typeof addressFormvalidations>

export function Checkout() {
  const { coffees, cartCount, coffeeTotal, buyCoffee, } = useCoffeeDelivery();
  const navigate = useNavigate();
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
    buyCoffee({
      address: data.rua,
      addressNumber: data.numero,
      paymentType: data.paymentType,
      city: data.cidade,
      uf: data.uf,
      district: data.bairro
    })
    navigate('/success')
  }

  useEffect(() => {
    if (!errors) return;

    const errorsList = Object.values(errors)
    if (!Array.isArray(errorsList)) return;
    if (errorsList.length === 0) return;

    const firstMessage = errorsList.find((error) => error?.message)
    if (!firstMessage?.message) return;

    toast.error(firstMessage.message)

  }, [errors])


  useEffect(() => {
    if (cartCount > 0) return;
    navigate('/')
  }, [cartCount])

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
            {
              coffees.map((coffee) => {
                if (!coffee.count) return null
                return (
                  <div key={coffee.id}>
                    <CoffeeCheckoutCard count={coffee.count} id={coffee.id} img={coffee.img} price={coffee.price} title={coffee.title} />
                    <hr />
                  </div>
                )
              })
            }
          </div>

          <div className={styles.paymentTotalContainer}>
            <div>
              <p>Total de itens</p>
              <span>{formatCurrency({ currency: true, value: coffeeTotal })}</span>
            </div>

            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>{formatCurrency({ currency: true, value: coffeeTotal + 3.5 })}</strong>
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