import { Modal, ModalBackground } from "../../../components/Modal"
import { usePlantingMaterialAction } from "../../planting-materials/stores/usePlantingMaterialAction"
import { PlantingForm } from "./PlantingForm"

export const CreatePlantingModal = () => {

  const { plantingMaterial, action, resetAction } = usePlantingMaterialAction()

  const mayShow = !!plantingMaterial && action === "planting"

  return <Modal visible={mayShow} transparent>
      <ModalBackground className="flex flex-col justify-end">
        { <PlantingForm 
          title={plantingMaterial?.name} 
          onClose={() => resetAction()}
          onSubmit={(planting) => {

          }}/>
        } 
      </ModalBackground>
    </Modal>

}
