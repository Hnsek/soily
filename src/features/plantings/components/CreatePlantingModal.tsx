import { Modal, ModalBackground } from "../../../components/Modal"
import { usePersistPlantingMaterial } from "../../planting-materials/hooks/usePersistPlantingMaterial"
import { usePlantingMaterialAction } from "../../planting-materials/stores/usePlantingMaterialAction"
import { usePersistPlanting } from "../hooks/usePersistPlanting"
import { PlantingForm } from "./PlantingForm"

export const CreatePlantingModal = () => {

  const { plantingMaterial, action, resetAction } = usePlantingMaterialAction()
  const { updatePlantingMaterial } = usePersistPlantingMaterial()

  const { createPlanting } = usePersistPlanting()
  
  const mayShow = !!plantingMaterial && action === "planting"
  
  return <Modal visible={mayShow} transparent>
      <ModalBackground className="flex flex-col justify-end">
        { <PlantingForm 
          title={plantingMaterial?.name} 
          onClose={() => resetAction()}
          onSubmit={(planting) => {
            if(!plantingMaterial){
              return
            }

            createPlanting({...planting, plantingMaterial})
            updatePlantingMaterial(plantingMaterial._id, { currentQuantity: plantingMaterial.plant(planting.quantity)})
            resetAction()
          }}/>
        } 
      </ModalBackground>
    </Modal>

}
