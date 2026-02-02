import { Modal, ModalBackground, modalStore } from "../../../components/Modal"
import { usePersistPlantingMaterial } from "../hooks/usePersistPlantingMaterial"
import { PlantingMaterialForm, PlantingMaterialFormData } from "./PlantingMaterialForm"

export const CreatePlantingMaterialModal = () => {
  const { createPlantingMaterial } = usePersistPlantingMaterial()

  const onSubmit = (plantingMaterial : PlantingMaterialFormData) => {
    createPlantingMaterial({...plantingMaterial, currentQuantity: plantingMaterial.initialQuantity})
    modalStore.close("register-planting-material-modal")
  }

  return <Modal id="register-planting-material-modal" transparent>
      <ModalBackground className="flex flex-col justify-end">
        <PlantingMaterialForm 
          onSubmit={onSubmit}
          onClose={() => modalStore.close("register-planting-material-modal")}
          />
      </ModalBackground>  
    </Modal>
 
}
