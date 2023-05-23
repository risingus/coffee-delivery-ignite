import { useFormContext } from 'react-hook-form'
import styles from './styles.module.scss'


export function AddressForm() {
  const { register } = useFormContext();

  return (
    <div className={styles.formContainer}>
      <input
        className={styles.formInput}
        placeholder='CEP'
        type="text"
        id='cep'
        {...register('cep')}
      />

      <input
        className={styles.formInput}
        placeholder='Rua'
        type="text"
        id='rua'
        {...register('rua')}
      />

      <div className={styles.formAddress1}>
        <input
          className={styles.formInput}
          placeholder='Número'
          type="text"
          id='numero'
          {...register('numero')}
        />

        <div className={styles.formComplementoContainer}>
          <input
            className={styles.formInput}
            placeholder='Complemento'
            type="text"
            id='complemento'
            {...register('complemento')}
          />
          <span>Opcional</span>
        </div>


      </div>

      <div className={styles.formAddress2}>
        <input
          className={styles.formInput}
          placeholder='Bairro'
          type="text"
          id='bairro'
          {...register('bairro')}
        />

        <input
          className={styles.formInput}
          placeholder='Cidade'
          type="text"
          id='cidade'
          {...register('cidade')}
        />

        <input
          className={styles.formInput}
          placeholder='UF'
          type="text"
          id='uf'
          {...register('uf')}
        />
      </div>
    </div>
  )
}