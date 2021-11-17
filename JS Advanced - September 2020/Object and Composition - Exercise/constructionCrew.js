function solve(worker) {
    if(worker.dizziness){
        let levelOfHydratation = 0.1*worker.weight*worker.experience;
        worker.levelOfHydrated+=levelOfHydratation;
        worker.dizziness=false;
    }

    return worker;
}

solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true });